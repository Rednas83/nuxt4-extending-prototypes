import { defineNuxtPlugin } from 'nuxt/app'

declare global {
  interface String {
    capitalize(): string
  }
}

//* Capitalize first letter
// ? {value: hello world!} => 'Hello world!'
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

console.log("Hello world".capitalize())

export default defineNuxtPlugin(() => { })