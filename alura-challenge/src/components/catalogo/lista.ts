import React from 'react';


function Lista(x:string){
    const produtos = {
        starWars:
            [{
                nome: 'Caneca StormTrooper',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/starWars/canecaStorm.png'
            },
            {
                nome: 'Capacetes Lego',
                preço: 'R$ 60,00',
                link:'', 
                img:'imgs/starWars/capaceteLego.png'
            },
            {
                nome: 'Boneco Yoda',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/starWars/bonecoYoda.png'
            },
            {
                nome: 'Boneco StormTrooper',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/starWars/bonecoStorm.png'
            },
            {
                nome: 'Boneco Bebê Yoda',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/starWars/bonecoBebeYoda.png'
            },
            {
                nome: 'ActionFigures',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/starWars/actionFigures.png'
            }
        ],
        consoles:[
            {
                nome: 'Controle Xbox',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/consoles/controleXbox.png'
            },
            {   nome: 'Playstation',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/consoles/playstation5.png'
            },
            {   nome: 'NES',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/consoles/NES.png'
            },
            {   nome: 'Controle Nintendo Switch',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/consoles/controleNintendoSwitch.png'
            },
            {   nome: 'Xbox Series X',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/consoles/xboxSeriesX.png'
            },
            {   nome: 'Game Boy Color',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/consoles/gameBoyColor.png'
            }
        ],
        diversos:[
            {   nome: 'Camisa Atari',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/diversos/camisaAtari.png'
            },
            {   nome: 'Camisa SNES',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/diversos/camisaSNES.png'
            },
            {   nome: 'Action Figure SONIC',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/diversos/actionFigureSonic.png'
            },
            {   nome: 'Relógio Rosa',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/diversos/relogioRosa.png'
            },
            {   nome: 'Oculus Rift',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/diversos/oculusRift.png'
            },
            {   nome: 'Pelúcia Pikachu',
                preço: 'R$ 60,00',
                link:'',
                img:'imgs/diversos/peluciaPikachu.png'
            }
        ]
    }
        if(x=='Star Wars'){
            return(produtos.starWars)
        }  if(x=='Consoles'){
            return(produtos.consoles)
        }
        if(x=='Diversos'){
            return(produtos.diversos)
        }
}


export default Lista;