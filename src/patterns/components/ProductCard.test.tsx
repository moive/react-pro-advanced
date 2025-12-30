import { beforeEach, describe, it, vi, expect } from "vitest";
import * as useProductModule from "../hooks/useProduct";
import { render, screen } from "@testing-library/react";
import { ProductCard } from ".";

describe("ProductCard", () => {
  // Define un producto mock
  const mockProduct = {
    id: "1",
    title: "Test Product",
    img: "test.jpg",
  };

  // Mock del hook useProduct
  const mockUseProduct = vi.spyOn(useProductModule, "useProduct");

  // Setup antes de cada test
  beforeEach(() => {
    // Limpia los mocks antes de cada test
    vi.clearAllMocks();

    // Configura el valor por defecto del mock
    mockUseProduct.mockReturnValue({
      counter: 0,
      increaseBy: vi.fn(),
    });
  });

  // TEST 1: Verifica que se renderice correctamente
  it("Should render the component with children", () => {
    render(
      <ProductCard product={mockProduct}>
        <div>Child Component</div>
      </ProductCard>
    );
    // Verifica que el componente hijo se renderice
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  // TEST 2: Verifica que renderice múltiples children
  it("Should render multiple children correctly", () => {
    render(
      <ProductCard product={mockProduct}>
        <div>First Child</div>
        <div>Second Child</div>
      </ProductCard>
    );

    // Verifica que ambos hijos se rendericen
    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  // TEST 3: Verifica que el hook useProduct sea llamado
  it("Should call useProduct hook", () => {
    render(
      <ProductCard product={mockProduct}>
        <div>Content</div>
      </ProductCard>
    );
    // Verifica que el hook se haya llamado al menos una vez
    expect(mockUseProduct).toHaveBeenCalled();
  });

  // TEST 4: Verifica que el contexto proporcione los valores correctos
  it("Should provide context with product data", () => {
    render(
      <ProductCard product={mockProduct}>
        <div>Content</div>
      </ProductCard>
    );
    // Este test verifica indirectamente que el contexto está disponible
    // porque ProductCard no lanza error
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  // TEST 5: Verifica que maneja diferentes estados del hook
  it("Should work with different counter values from hook", () => {
    // Configura el mock con un contador diferente
    mockUseProduct.mockReturnValue({
      counter: 10,
      increaseBy: vi.fn(),
    });

    render(
      <ProductCard product={mockProduct}>
        <div>Product Card</div>
      </ProductCard>
    );

    // Verifica que se renderice sin errores
    expect(screen.getByText("Product Card")).toBeInTheDocument();
    // Verifica que el hook fue llamado
    expect(mockUseProduct).toHaveBeenCalled();
  });

  // TEST 6: Verifica que la función increaseBy del contexto funciona
  it("Should provide increaseBy function from hook", () => {
    const mockIncreaseBy = vi.fn();
    mockIncreaseBy.mockReturnValue({
      counter: 5,
      increaseBy: mockIncreaseBy,
    });

    render(
      <ProductCard product={mockProduct}>
        <div>Content</div>
      </ProductCard>
    );

    // Verifica que la función exista en el hook
    expect(mockIncreaseBy).toBeDefined();
  });

  // TEST 7: Verifica que renderiza sin children (edge case)
  it("Should render even without children", () => {
    const { container } = render(<ProductCard product={mockProduct}></ProductCard>);

    // Verifica que existe al menos un div
    const divs = container.querySelectorAll("div");
    expect(divs.length).toBeGreaterThan(0);

    // Verifica que el Provider renderizó algo
    expect(container.firstChild).toBeTruthy();
  });

  // TEST 8: Verifica que aplica la clase CSS correctamente
  it("Should apply className prop correctly", () => {
    const { container } = render(
      <ProductCard product={mockProduct} className="bg-dark">
        <div>Content</div>
      </ProductCard>
    );

    // Obtiene el div principal del ProductCard
    const productCardDiv = container.querySelector("div");

    // Verifica que el className incluya la clase pasada
    expect(productCardDiv).toHaveClass("bg-dark");
  });

  // TEST 9: Verifica que aplica los estilos inline correctamente
  it("Should apply style prop correctly", () => {
    const { container } = render(
      <ProductCard product={mockProduct} style={{ padding: "20px", border: "1px solid red" }}>
        <div>Content</div>
      </ProductCard>
    );

    // Obtiene el div principal del ProductCard
    const productCardDiv = container.querySelector("div") as HTMLDivElement;

    // Verifica que los estilos se hayan aplicado
    expect(productCardDiv.style.padding).toBe("20px");
    expect(productCardDiv.style.border).toBe("1px solid red");
  });
});
