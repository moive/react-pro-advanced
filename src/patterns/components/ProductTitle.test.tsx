import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductContext } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";

describe("ProductTitle", () => {
  // Define un producto mock para el contexto
  const mockProduct = {
    id: "1",
    title: "Context Product Title",
    img: "test-image.jpg",
  };

  // Define los valores por defecto del contexto para los tests
  const defaultContextValue = {
    counter: 5,
    increaseBy: vi.fn(),
    product: mockProduct,
  };

  // Función helper que renderiza el componente envuelto en su contexto
  const renderWithContext = (contextValue = defaultContextValue) => {
    return render(
      <ProductContext.Provider value={contextValue}>
        <ProductTitle />
      </ProductContext.Provider>
    );
  };

  it("Should display the title from props when provided", () => {
    render(
      <ProductContext.Provider value={defaultContextValue}>
        <ProductTitle title="Props Title" />
      </ProductContext.Provider>
    );
    expect(screen.getByText("Props Title")).toBeInTheDocument();
  });

  it("Should display the title from context props title is not provided", () => {
    renderWithContext();
    expect(screen.getByText("Context Product Title")).toBeInTheDocument();
  });

  it("Should prioritize props title over context title", () => {
    render(
      <ProductContext.Provider value={defaultContextValue}>
        <ProductTitle title="Props Title" />
      </ProductContext.Provider>
    );
    expect(screen.getByText("Props Title")).toBeInTheDocument();
    expect(screen.queryByText("Context Product Title")).not.toBeInTheDocument();
  });

  it("Should have the correct CSS class applied", () => {
    render(
      <ProductContext.Provider value={defaultContextValue}>
        <ProductTitle title="Test Title" />
      </ProductContext.Provider>
    );
    const span = screen.getByText("Test Title");
    expect(span.className).toMatch(/productDescription/);
  });
});
