

function MainMintable() {
    return (
        <>
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>
        <div style = {{zIndex:'1', 
        color: 'blue',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        padding: '5px'
        }}>
            Completely free to mint NFTs
            Turn any creation into an item on the blockchain
            or trade digital items on Mintable to easily earn crypto
        </div>
        <div style = {{
            display: 'flex',
            flexDirection:'row',
            alignItems: 'flex-end',
            justifyContent:'center',
            padding: '8px',
        }}>
        <button type = "button">Start Minting!</button>
        <button type = "button">Shop Now!</button>
        </div>
        </div>
        </>
    );
  }
  
  export default MainMintable;