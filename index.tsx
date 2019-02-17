const input = document.getElementById('input') as HTMLInputElement

input.autofocus = true

input.addEventListener('input', (event: Event): void => {
  const currentTarget = event.currentTarget as HTMLInputElement
  console.log(currentTarget.value)
}