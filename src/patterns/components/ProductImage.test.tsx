import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductContext } from "./ProductCard";
import { ProductImage } from "./ProductImage";

describe("ProductImage", () => {
  // Define un producto mock para el contexto
  const mockProduct = {
    id: "1",
    title: "Test Product",
    img: "context-image.jpg",
  };

  // Define los valores por defecto del contexto para los tests
  const defaultContextValue = {
    counter: 5,
    increaseBy: vi.fn(),
    product: mockProduct,
  };

  // Función helper que renderiza el componente envuelto en su contexto
  const renderWithContext = (props: any, contextValue = defaultContextValue) => {
    return render(
      <ProductContext.Provider value={contextValue}>
        <ProductImage {...props} />
      </ProductContext.Provider>
    );
  };

  it("Should display the image from props when provided", () => {
    const { container } = renderWithContext({ img: "props-image.jpg" });
    const img = container.querySelector("img");
    expect(img?.src).toContain("props-image.jpg");
  });

  it("Should display the image from context when props img is empty", () => {
    const { container } = renderWithContext({ img: "" });
    const img = container.querySelector("img");
    expect(img?.src).toContain("context-image.jpg");
  });

  it("Should display no-image placeholder when both props and context img are missing", () => {
    const contextWithoutImg = {
      ...defaultContextValue,
      product: { id: "1", title: "Test Product" },
    };
    const { container } = renderWithContext({ img: "" }, contextWithoutImg as any);
    const img = container.querySelector("img");
    expect(img?.src).toContain("no-image.jpg");
  });

  it("Should prioritize props image over context image", () => {
    const { container } = renderWithContext({ img: "props-image.jpg" });
    const img = container.querySelector("img");
    expect(img?.src).toContain("props-image.jpg");
    expect(img?.src).not.toContain("context-image.jpg");
  });

  it("Should have the correct CSS class applied", () => {
    const { container } = renderWithContext({ img: "test.jpg" });
    const img = container.querySelector("img");
    expect(img?.className).toMatch(/productImg/);
  });

  it("Should apply className prop correctly", () => {
    const { container } = renderWithContext({
      img: "test.jpg",
      className: "custom-class",
    });
    const img = container.querySelector("img");
    expect(img).toHaveClass("custom-class");
  });

  it("Should have alt text set correctly", () => {
    const { container } = renderWithContext({ img: "test.jpg" });
    const img = container.querySelector("img");
    expect(img?.alt).toBe("Coffee Mug");
  });

  it("Should apply style prop correctly", () => {
    const { container } = renderWithContext({
      img: "test.jpg",
      style: { width: "100px", height: "100px" },
    });
    const img = container.querySelector("img") as HTMLImageElement;
    expect(img.style.width).toBe("100px");
    expect(img.style.height).toBe("100px");
  });
});
