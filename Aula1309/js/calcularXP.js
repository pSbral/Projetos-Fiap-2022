const btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.addEventListener('click', () => {
            const herois = document.querySelectorAll('.heroi')
            herois.forEach(heroi => {
                let forca = Number(heroi.querySelector('.forca').textContent)
                let agilidade = Number(heroi.querySelector('.agilidade').textContent)
                let mana = Number(heroi.querySelector('.mana').textContent)

                let xpFinal = (forca + mana + agilidade) / 3

                heroi.querySelector('.xp').textContent = xpFinal.toFixed(0)

                if (xpFinal < 45) {
                    heroi.classList.add('bg-danger', 'text-light')
                }
            });
    })