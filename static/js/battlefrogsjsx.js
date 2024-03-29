"use strict";

function GenerateBoard(props) {
    let water = [];
    let squareNames = []

    for (let row = 0; row < 10; row++) {
        let thisRow = []; 
            for (let col = 0; col < 10; col++) {
                let gridValue = row.toString().concat(col.toString());

                thisRow.push(
                <i className="fas fa-leaf" key={row.toString().concat(col.toString())}
                value={gridValue} id="HIBODE" x="8" y={col} onClick={props.clickOnLeaf}></i>
            );
        }  
        water.push(<div className="game-row" key={'row'.concat(row.toString())}>{thisRow}</div>);
    }
    return <div className="board">{water}</div>;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    userHits: 0,
    gameRounds: 0,
    botHits: 0,
    };

    this.lookUnderLeaf = this.lookUnderLeaf.bind(this);
}

    lookUnderLeaf(evt) {
        console.log('Leaf was clicked');

        console.log(evt.target.value);

        console.log(evt.target.key);

        console.log(evt.target.className);

        console.log(evt.target.id);

        console.log(evt.target.x);

        console.log(evt.target.y);
        
        if (['20', '21', '22'].includes('22')) {
            evt.target.className="fas fa-frog";
        } else {
            evt.target.className="fas fa-water";
        }


        this.setState(prevState => {
            console.log(prevState.gameRounds);

               return {gameRounds: prevState.gameRounds + 1}
        })

    }


    render () {
    return (

        <div>
        <h1>BattleFrogs JSX imported!</h1>
        <div>
            <GenerateBoard
            clickOnLeaf={this.lookUnderLeaf}
            />
        </div>
        </div>

        );
    }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
