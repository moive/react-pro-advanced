import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useProduct } from "./useProduct";

describe("useProduct hook", () => {
  // TEST 1: Verifica que el hook retorne valores iniciales correctos
  it("Should return initial values", () => {
    // renderHook ejecuta el hook en un entorno de test
    const { result } = renderHook(() => useProduct());

    // Verifica que counter comience con 0
    expect(result.current.counter).toBe(0);

    // Verifica que increaseBy sea una functión
    expect(typeof result.current.increaseBy).toBe("function");
  });

  // TEST 2: Verifica que increaseBy aumente el contador correctamente
  it("Should increase counter by the provider value", () => {
    const { result } = renderHook(() => useProduct());

    // act envuelve actualizaciones de estado en React
    act(() => {
      result.current.increaseBy(1);
    });

    // Verifica que el contador aumentó en 1
    expect(result.current.counter).toBe(1);
  });

  // TEST 3: Verifica que increaseBy pueda aumentar múltiples veces
  it("Should increase counter multiple times", () => {
    const { result } = renderHook(() => useProduct());
    act(() => {
      result.current.increaseBy(1);
      result.current.increaseBy(2);
      result.current.increaseBy(3);
    });

    // Verifica que el contador sea la suma de todos los aumentos (1 + 2 + 3)
    expect(result.current.counter).toBe(6);
  });

  // TEST 4: Verifica que increaseBy pueda disminuir el contador
  it("Should decrease counter with negative values", () => {
    const { result } = renderHook(() => useProduct());
    act(() => result.current.increaseBy(5));

    expect(result.current.counter).toBe(5);

    act(() => {
      result.current.increaseBy(-2);
    });

    // Verifica que disminuyó correctamente (5-2)
    expect(result.current.counter).toBe(3);
  });

  // TEST 5: Verifica que el contador no baje de 0 (Math.max)
  it("Should not allow counter to go below 0", () => {
    const { result } = renderHook(() => useProduct());
    act(() => {
      // Intenta disminuir cuando está en 0
      result.current.increaseBy(-5);
    });

    // Verifica que se mantiene en 0 (nunca negativo)
    expect(result.current.counter).toBe(0);
  });

  // TEST 6: Verifica que no baja de 0 incluso cuando hay valor positivo
  it("should not go below 0 when decreasing from positive value", () => {
    const { result } = renderHook(() => useProduct());

    act(() => {
      result.current.increaseBy(3);
    });

    expect(result.current.counter).toBe(3);

    act(() => {
      // Intenta disminuir más de lo que tiene
      result.current.increaseBy(-10);
    });

    // Verifica que se quedó en 0, no en -7
    expect(result.current.counter).toBe(0);
  });

  // TEST 7: Verifica que se pueden pasar valores decimales
  it("Should work with decimal numbers", () => {
    const { result } = renderHook(() => useProduct());

    act(() => {
      result.current.increaseBy(2.5);
    });

    // Verifica que acepte decimales
    expect(result.current.counter).toBe(2.5);
  });

  // TEST 8: Verifica que se pueden pasar valores grandes
  it("should handle large numbers", () => {
    const { result } = renderHook(() => useProduct());

    act(() => {
      result.current.increaseBy(1000000);
    });

    // Verifica que maneje números grandes
    expect(result.current.counter).toBe(1000000);
  });

  // TEST 9: Verifica que cada llamada al hook es independiente
  it("should create independent hook instances", () => {
    const { result: result1 } = renderHook(() => useProduct());
    const { result: result2 } = renderHook(() => useProduct());

    act(() => {
      result1.current.increaseBy(5);
    });

    // Verifica que el segundo hook no se vea afectado
    expect(result1.current.counter).toBe(5);
    expect(result2.current.counter).toBe(0);
  });

  // TEST 10: Verifica el flujo completo (aumentar, disminuir, límite)
  it("should handle complete workflow correctly", () => {
    const { result } = renderHook(() => useProduct());

    // Inicio
    expect(result.current.counter).toBe(0);

    // Aumentar
    act(() => {
      result.current.increaseBy(5);
    });
    expect(result.current.counter).toBe(5);

    // Disminuir
    act(() => {
      result.current.increaseBy(-2);
    });
    expect(result.current.counter).toBe(3);

    // Intentar ir por debajo de 0
    act(() => {
      result.current.increaseBy(-5);
    });
    expect(result.current.counter).toBe(0);
  });
});
