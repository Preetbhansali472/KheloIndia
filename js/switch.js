const main = document.querySelector('.switch_main');
    const img = document.querySelector('.switch');
    
    main.addEventListener('mouseover',e=>{
        const list = e.target.closest('a')
        if(list){
            list.classList.add('switch_list-color');
        }
        main.addEventListener('mouseout',e=>{
            list.classList.remove('switch_list-color')
        })
    })

    img.addEventListener('mouseover',e=>{
        main.classList.remove('is-hidden');
        main.classList.add('is-show');
        img.addEventListener('mouseout',e=>{
                main.classList.remove('is-show');
                main.classList.add('is-hidden');
            })
    })


    main.addEventListener('mouseover',e=>{
        main.classList.remove('is-hidden');
        main.classList.add('is-show');
        main.addEventListener('mouseout',e=>{
            main.classList.remove('is-show');
            main.classList.add('is-hidden');
        })
    })