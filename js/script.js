document.querySelector('#darkMode').addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.style.setProperty('--background', '#000')
        document.documentElement.style.setProperty('--backgroundConteudo', '#1d1c1c')
        document.documentElement.style.setProperty('--boxShadowConteudo', '#5d5656')
        document.documentElement.style.setProperty('--borderColorButton', '#000')
        document.documentElement.style.setProperty('--textColor', '#fff')
    } else {
        document.documentElement.style.setProperty('--background', '#f1f1f1')
        document.documentElement.style.setProperty('--backgroundConteudo', '#fff')
        document.documentElement.style.setProperty('--boxShadowConteudo', '#ccc')
        document.documentElement.style.setProperty('--borderColorButton', '#f1f1f1')
        document.documentElement.style.setProperty('--textColor', '#000')
    }
})