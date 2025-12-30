import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProductContext } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
describe("ProductButtons", () => {
  // Crea una función simulada que rastrea si fue llamada y con qué argumentos
  const mockIncreaseBy = vi.fn();

  // Define un producto mock para el contexto
  const mockProduct = {
    id: "1",
    title: "Test Product",
    img: "test.jpg",
  };

  // Define los valores por defecto del contexto para los tests
  const defaultContextValue = {
    product: mockProduct,
    counter: 5,
    increaseBy: mockIncreaseBy,
  };

  // Función helper que renderiza el componente envuelto en su contexto
  // Esto evita repetir el código de envoltura en cada test
  const renderWithContext = (props: any = {}, contextValue = defaultContextValue) => {
    return render(
      <ProductContext.Provider value={contextValue}>
        <ProductButtons {...props} />
      </ProductContext.Provider>
    );
  };

  // TEST 1: Verifica que los botones se rendericen en el DOM
  it("Should render the component correctly", () => {
    renderWithContext();
    // Busca el botón con texto "-" y verifica que exista
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    // Busca el botón con texto "+" y verifica que exista
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
  });

  // TEST 2: Verifica que el contador se muestre correctamente
  it("Should display the current counter value", () => {
    renderWithContext();
    // Busca el número "5" en el DOM y verifica que esté visible
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  // TEST 3: Verifica que el botón menos llame a increaseBy con -1
  it("Should call increaseBy(-) when clicking the minus button", async () => {
    // Simula acciones del usuario
    const user = userEvent.setup();
    renderWithContext();

    // Encuentra el botón menos
    const minusButton = screen.getByRole("button", { name: "-" });

    // Simula un click del usuario en el botón
    await user.click(minusButton);
    expect(mockIncreaseBy).toHaveBeenCalledWith(-1);
  });

  // TEST 4: Verifica que el botón más llame a increaseBy con 1
  it("Should call increaseBy(+) when clicking the plus button", async () => {
    // Simula acciones del usuario
    const user = userEvent.setup();
    renderWithContext();

    // Encuentra el botón más
    const plusButton = screen.getByRole("button", { name: "+" });
    // Simula un click del usuario en el botón
    await user.click(plusButton);
    // Verifica que mockIncreaseBy fue llamado con el argumento 1
    expect(mockIncreaseBy).toHaveBeenCalledWith(1);
  });

  // TEST 5: Verifica que el contador se actualice cuando el contexto cambia
  it("Should update the counter value when context changes", () => {
    // Renderiza con counter = 5
    const { rerender } = render(
      <ProductContext.Provider
        value={{ counter: 5, increaseBy: mockIncreaseBy, product: mockProduct }}
      >
        <ProductButtons />
      </ProductContext.Provider>
    );
    // Verifica que muestre 5
    expect(screen.getByText("5")).toBeInTheDocument();

    // Re-renderiza el component con counter = 10(simula cambio de contexto)
    rerender(
      <ProductContext.Provider
        value={{ counter: 10, increaseBy: mockIncreaseBy, product: mockProduct }}
      >
        <ProductButtons />
      </ProductContext.Provider>
    );

    // Verifica que ahora muestre "10" (el componente reaccionó al cambio)
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  // TEST 6: Verifica que aplica la clase CSS correctamente
  it("Should apply className prop correctly", () => {
    const { container } = renderWithContext({ className: "custom-buttons" });

    // Obtiene el div principal de ProductButtons
    const buttonsContainer = container.querySelector("div");

    // Verifica que el className incluya la clase pasada
    expect(buttonsContainer).toHaveClass("custom-buttons");
  });
});
