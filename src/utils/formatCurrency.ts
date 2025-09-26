export function formatCurrency(value: string | number | undefined): string {

    const numberValue = Number(
        typeof value === "string"
            ? value.replace(/\D/g, "")
            : value
    );

    if (!numberValue) return "";

    return numberValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });
}
