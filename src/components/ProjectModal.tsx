import { useState, useEffect, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "../styles/components/ProjectModal.css";

pdfjs.GlobalWorkerOptions.workerSrc =
    `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ProjectModalProps {
    project: any;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1);
    const [pageDimensions, setPageDimensions] = useState<{ width: number; height: number } | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const recomputeScale = useCallback(() => {
        if (!containerRef.current || !pageDimensions) return;

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        if (containerWidth === 0 || containerHeight === 0) return;

        const widthScale = (containerWidth - 40) / pageDimensions.width;
        const heightScale = (containerHeight - 20) / pageDimensions.height;

        const nextScale = Math.max(0.1, Math.min(widthScale, heightScale));
        setScale(nextScale);
    }, [pageDimensions]);

    function onPageLoad(page: any) {
        const viewport = page.getViewport({ scale: 1 });
        setPageDimensions({ width: viewport.width, height: viewport.height });
    }

    function goToPrevPage() {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    }

    function goToNextPage() {
        setPageNumber((prev) => Math.min(prev + 1, numPages));
    }

    // ESC + Pfeiltasten
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") goToPrevPage();
            if (e.key === "ArrowRight") goToNextPage();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [numPages]);

    // Recompute scale when page changes or container resizes
    useEffect(() => {
        recomputeScale();
    }, [pageDimensions, recomputeScale, pageNumber]);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(() => {
            recomputeScale();
        });

        observer.observe(containerRef.current);
        window.addEventListener("resize", recomputeScale);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", recomputeScale);
        };
    }, [recomputeScale]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content"
                 onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="pdf-container" ref={containerRef}>
                    <Document
                        file={project.pdf}
                        onLoadSuccess={onDocumentLoadSuccess}>
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            onLoadSuccess={onPageLoad}/>
                    </Document>
                </div>
                <div className="pdf-controls">
                    <button onClick={goToPrevPage} disabled={pageNumber <= 1}>⬅</button>
                    <span>{pageNumber} / {numPages}</span>
                    <button onClick={goToNextPage} disabled={pageNumber >= numPages}>➡</button>
                </div>
            </div>
        </div>
    );
}
