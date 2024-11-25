let environment;
let homePage;
if(typeof window !== 'undefined') {
    environment = "BROWSER"
    homePage = await import('./component.jsx')
} else {
    environment = "NODE"
}

class MyClass {
    constructor() {
        this.environment = environment
        this.homePage = homePage
    }
}

export { MyClass }