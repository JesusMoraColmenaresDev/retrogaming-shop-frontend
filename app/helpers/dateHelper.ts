export function formatDate(dateString?: string) {
  if (!dateString) return "Fecha desconocida";
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}