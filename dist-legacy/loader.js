async function loadApp() {
  try {
    // Simple ES6 feature test
    new Function("() => {}")

    // Load modern manifest
    const manifest = await fetch("/modern/manifest.json").then((res) => res.json())
    const entry = manifest["index.html"]

    // Load CSS
    if (entry.css) {
      entry.css.forEach((css) => {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "/modern/" + css
        document.head.appendChild(link)
      })
    }

    // Load JS
    const script = document.createElement("script")
    script.type = "module"
    script.src = "/modern/" + entry.file
    document.body.appendChild(script)
  } catch (e) {
    // Fallback: legacy manifest
    const manifest = await fetch("/legacy/manifest.json").then((res) => res.json())
    const entry = manifest["index.html"]

    // Load CSS
    if (entry.css) {
      entry.css.forEach((css) => {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "/legacy/" + css
        document.head.appendChild(link)
      })
    }

    // Load JS
    const script = document.createElement("script")
    script.src = "/legacy/" + entry.file
    document.body.appendChild(script)
  }
}

loadApp()
