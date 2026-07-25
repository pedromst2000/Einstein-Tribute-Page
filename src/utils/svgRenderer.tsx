import React, { useEffect, useRef } from "react";

/**
 * SVG Renderer Props
 * Handles rendering local SVG files from public/assets with styling support
 */
export interface SvgRendererProps {
  path: string;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  color?: string;
  opacity?: number;
}

/**
 * Utility component to render local SVG files with custom styling
 * Supports SVG files from public/assets (e.g., Noun Project icons)
 */
export const SvgRenderer: React.FC<SvgRendererProps> = ({
  path,
  width = "24px",
  height = "24px",
  color = "#FFFFFF",
  opacity = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSvg: () => Promise<void> = async () => {
      if (!containerRef.current) return;

      try {
        const response = await fetch(path);
        if (!response.ok) {
          console.error(`Failed to load SVG: ${path}`);
          return;
        }

        const svgText = await response.text();
        const svgDoc = new DOMParser().parseFromString(
          svgText,
          "image/svg+xml",
        );

        if (svgDoc.documentElement.nodeName === "parsererror") {
          console.error(`Failed to parse SVG: ${path}`);
          return;
        }

        const svgElement = svgDoc.documentElement as unknown as SVGSVGElement;

        // Apply dimensions and styling
        svgElement.style.width = String(width);
        svgElement.style.height = String(height);
        svgElement.style.opacity = String(opacity);
        svgElement.style.color = color;

        // Apply color to SVG elements (stroke for outlines, fill for solid)
        svgElement
          .querySelectorAll("path, circle, rect, polygon")
          .forEach((el) => {
            const hasNoFill =
              !el.getAttribute("fill") || el.getAttribute("fill") === "none";
            el.setAttribute(hasNoFill ? "stroke" : "fill", color);
          });

        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(svgElement);
      } catch (error) {
        console.error(`Error loading SVG from ${path}:`, error);
      }
    };

    loadSvg();
  }, [path, width, height, color, opacity]);

  return <div ref={containerRef} />;
};

export default SvgRenderer;
