import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MainMintable from './MainMintable';
import AuthorCard from './AuthorCard';

function App() {
  const mainPageImage = "https://d1iczm3wxxz9zd.cloudfront.net/37f36641-eb9c-47a6-9625-41bacead7dc1/000000-0000000000/76785349421201409299720476117687581889028700677695507322701214461143719028261/ITEM_PREVIEW1.jpg";
  const mintableLogo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHEBIIBwgVFhMVGRgbGBgYGBgdIRsgGxgiHR0dGxkgIDQlHiAxIBsdJTIlKDUuMC86GyM1ODMtNzQtLi0BCgoKDg0NGg8NGislHyU3Ky0rNzc3Lzc3MSs3NzcrLSs3NzAuLysrKzUrOC4tKysrLTcrKys3KysrKysrKzcrLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYFBwgDAgH/xABGEAABAwICBAkHBg4DAAAAAAABAAIDBAUGERIhMUEHEyIyM1FhcbIUFVJyc4GRFyNCobHhFjVTVFVWY5KTs9HS0/BigsH/xAAXAQEBAQEAAAAAAAAAAAAAAAAABAYC/8QAJhEBAAEEAAMJAQAAAAAAAAAAAAIBAwQRBjEyEhMUFVFTgbHRwf/aAAwDAQACEQMRAD8A1WiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi3lRcDVgqI45n19Tm5rScnR7xn6C9vkUw/8ApCp/ei/xoNDot8fIph/9IVP70X+NVHhG4MosNU4udnnkkjacpQ/RJbnscNEDVnqPeEGtUREBERAREQEREBEWy+DrgxjxHTm53maSONxyiDNEF2W1x0gdWeodxQa0Rb4+RTD/AOkKn96L/GnyKYf/AEhU/vRf40Gh0W9KngYsELHytr6nMNJ50e4eotEte13McCg+kREBERAREQEREHXdq6CH2bPCFKUW1dBD7NnhClIC8qmCGqY6nqIw5jwWuadhBGRBXqiDl7H2FZcJVbqTWYX5uhcd7fRJ9Juw+471W11FjrC8GLKR9DJkJByonkc142f9TsPYe5cxVdNPRSPpKyItkY4tc07QRtCDyREQEREBEXtR0s9bIylpYy573BrWjeTsCCwcH2FJcV1baYgiFmTpndTfRHadnxO5dNU8EVMxtPTxhrGgBoGwADIALBYGwxBhSkZQx5GQ8qVw+k47fcNgViQEREEe49DL6jvCVxpbNjvcuy7j0MvqO8JXGls2O9yCciIgIiICIiAiIg67tXQQ+zZ4QpSi2roIfZs8IUpAREQFqXhrwb5Uz8JrdFy4wBO0fSYNj+9u/s7ltpfD2NeC14zB1EHeg48X6rhwm4PdhSrzpmHyabN0R9H0oz3buzuKp6AiIgLdfArg7yZn4R3GPlvBEAO5p2v7zsHZ3qh8GmEX4qqxx7T5PFk6U9fUwdp+zNdJxsbGAyNoAAAAGwdgQfaIiAiIgj3HoZfUd4SuNLZsd7l2Xcehl9R3hK40tmx3uQTkREBERAREQEREHXdq6CH2bPCFKUW1dBD7NnhClICIiAiIgw2LMPUuJ6SS11mrS1sdvY8c1w7vrGY3rl2626qtE8luuEejLG4tcPsI7CMiOwrrta04ZMGm8wee7dFnUQDlAbZIxrI7XN1ke8dSDQqk2y31N1mjoKGPSkkcGtH+7t6ig56wt78DODvNcPn24R/PTD5sH6DDv73fZl1lBdMIYepsMUjLbTayNb3em47Xf+DsAWbREBERAREQR7j0MvqO8JXGls2O9y7LuPQy+o7wlcaWzY73IJyIiAiIgIiICIiDru1dBD7NnhClKLaugh9mzwhSkBERAREQEREGqpeCeB138ua1vkJzkMfU/Po8vQJ5Xdm3qW1AANQC/UQEREBERAREQR7j0MvqO8JXGls2O9y7LuPQy+o7wlcaWzY73IJyIiAiIgIiICIiDru1dBD7NnhClKLaugh9mzwhSkBERARUvhcuVXaLVLcbfMWSRvhc1w9q34g7CN+ayWBcU0uLqNlypxov2SM9B+8d28HqQWJERAREQERV/G2KKPCNI+51ms7I2Z63vOxo+0ncAUGfLgNpX5pN9ILjK41tbiKoluVwm0pJCXOd9gA6gNQHUF5ebv2v1feg7S0m+kE0m+kFxb5u/a/V96ebv2v1feg7KuLm8TLyhzHeErja2bHe5fnm79r9X3qRTU/EZjSzzQe6IiAiIgIiICIiDru1dBD7NnhClKLaugh9mzwhSkBERBQeHP8AEdT60P8ANatK8G+K58JzsqmZmJ3JlYPpNz2j/kNo+G9bq4c/xHU+tD/NaucaPmNQdiUNXBXxsq6SUOY8BzXDeCpC0RwO4281yCw3OX5mQ/NuP0Hnd6rvqPeSt7oCIiDxq6mCjjfVVcoaxjS5zjsAAzJK5T4SMY1GNq0yx5iBmbYWHcN7j/yO0+4blc+HTHvlzzhi0y/NsPz7gec4HmdzTt7e5awooOKGk4ayg9qaFrMows55lj/LH4LERc4d4VsUmTclDXZq0/D2DYyYzrfjvWmK8yx/lj8E8yx/lj8FlUUviLnq0nkmD7f2xLrNGATxx+CwwIOwq2Tc13cVSLf9LvVeNOU99qrMcQ4VjGrb7iOt72mIiKpmxERAREQEREHXdq6CH2bPCFKUW1dBD7NnhClICIiCg8Of4jqfWh/mtXONHzGro7hz/EdT60P81q5xo+Y1B7q1/KjjSmYyGmuQIaA3lRxk6htLiNaqiILT8rWPfz1n8KL+i+JuFbHkrXRmvAzBGYjjBGerMHLUVWUQQaWmfpcbONfb9qnIiD6i5w7wrYqnFzh3hWxQZnOjZ8K9Nz4ERFG1z4m5ru4qkW76XervNzXdxVIt30u9XYfKrGcV9Vr5/iYiIrWREREBERAREQbO+XCuoY44WWJjtEBvSO3DL0V8fL9cP1dZ/Ed/ataIg2X8v1w/V1n8R39qfL9cP1dZ/Ed/ataIgt+NOFusxXRSWeazsjDyw6Qe4kaLg7Zl2Kk0YyY3Ne6ICIiAiIgIiIP1p0SD1KZU4hkhIApgfeVCRcTtxn1UV42dfxt0sS1t7/hRL+aD4lPwol/NB8SvBFx4e36KvO873Pr8ez8TTOBb5KNfaVjbdnyiRvCmIu4W4w6aJMrNv5Ou/lvXIREXaUREQEREHvBQ1dQdGnpXuOWlyWuOrr1bu1fgo6pzDUtpn8WDkX6J0R2F2xbLffLhaqewwW6fixIBxhbqLwJsg1x3tGk7Vs5RWSfd6yruV3s0kuVMylqQ2IamggA6Qb6RJcc+1BrrCVJQGoZLiCgnfTEOz4trtZy1axlqz6isVUQsnmkZbYXlmk7QaRm4Nz1aWW/LLNXfgqxDeHXCjtTrjJxGbxxefJy4txyy71XsOV9VbrnFLRzuYTO1pyO1plGbT2FBiae3VtTpCmo5HaPO0WOOj35DUv2326puEjaamhcSXBp1Hk5nLN2WxXrHWNL1brjPR2eq4iKKR2TIwAHOJ0nvfq5RLiTrUnFNzrLbeIKm1zuh8rZSvlDDkHFx15/7vQUu94auNpqJLead7+LOWk1jsjq3aliGxSPdxTIyXbMgNfwV+x9i3ENDcqulo7xMxjZMmtDiANQ2LEYLjxJUyVFXY60Rcn5+d7mta0Odnynu2Ekbte1BXKqjqqTIVdM9mezSaRn8VbMR2q11FDRXOwWp8b53zNLNN8pOhkBlq79ysNTHW1FnuQvN/hrOLMDoiyUyGNxk0TrcARmNXxUF9+rrJYKFtsl0Hyy1AMjec1ofmQ121uZyzy9FBQKujqqI8XWUz2O6ntLT8CrXim32U26kvVntzoDNJK1zTK6TmatpA+xZKiudVieyXCO9ymV9IYXxSP1uHGOLS3S2nUD8ewLH3r8QW729R9qCmAE6gFKqbZcKVomqqGVjTsc5jgPiQrpwV0kAbX3d88cclPGwRSSDNsbpCRp5ZHWNHV3rO2KuFPMfP2PYKmmkDmyxPdK4ODgeaHNyac8jqyQakQAu1AL7naxj3Midm0EgHrGeorM4Mp73PVtOHHaMzWuOmdEBjcsnOcXagNe34a0GLqKCspgJKmkexp2FzXAH3lfBpqgASGB2i7UDkcj3FbYssd0qY6+mvWKKesiNLM4xtmMpa5oBa9oLdWR3jsWLw1iO4UNjqZ2yBz4Jo2wF4DuK0mkZsB2EAuy9ZBr6roK2iyNZRyMB2abXNz7swvzyKqzazyZ+buaNE5u7utbBwPfbliYVtkv1U6aJ9NK8cZrLHMy0XNJ2bfsXrUYrutHY6SriqPn3SyxCY5F7GDIlrCdmeTR3NQa4q6OqojoVlM9hO57S0/WvFbEtd1rcUWi5U98nMpphFLFI/W5pLiCNLtAy95Wu0BERAREQWauxHTVDLZG2F+dGMn7OV84HcnX9qmQ4uo47hX3c079CpinY1vJzaZAMi7X2KmogueDr1hSwSQXSenrHVMeeeiYeLJILdQI0ssj1qDW1uGIZoa6yxVem2Zr3iYxEaIdpEN0QNefWq0iDKYpucV5rai5U7CGyvLgHZZjPryU3FmIY7xUU9bQsc0xQws5WWelHvGW5V5EF4u18wdiCTztdqKrZUOA4xkJj4t5AyzDncpueXV/VRbFiSzU8dbabjbpW0lU5rgIngvi0HZtALtT923qVRRBe6DEmEqKnqbJHbqryecM0pNKPjXFjtIZ/Qa0dQz2lQ6C+4eq6CCyYgpqkcQ+RzHwGPXxhzIc16qCILTd8R26OkNgw1RyRwvcHyySuaZJS3mg6OprRtyH9c/W036xVFAyxYlgqMopHSRPg0M+UOU1wfq9/+moogtNoxNb7PUzmjtjnUU7OLkhe/Nzm5DlaYGp2eZ7MyO1erqrAVLnPS26tmdujmfGxg73M5RVRRBnsIV9goJpJMSW100ZYQ1rTsdmMjzhuzGe5emDcQU1ilnbXUrnwVET4pA05ODXb2nr3e9V1EF9suJMI2F0sVBb6p8c8UkckkjouMDXjLRja3kjrJOewKRhw2LzTcfL21HkvlMejoFnGAa9AnPkk9a10pkV1rYaeS1xzZQyOa5zcm6y3Yc8sx8UFlfiKxWWnnosJ0s/GVDdCSecs0gw7WsazUM+v7sspS+Y/MVIMQCo0TUTaJg0MwcvpB2oha6UyW61stOy1yTfMxuc9rcm6nO2nPLP60Gfu2IrXTUb7DhaklbFK5rppZi3jJNHW1uTdTWg6/wDTnVERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=";
  const secondImage = "https://c.files.bbci.co.uk/31F0/production/_117548721_nfts2.jpg";
  const thirdImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjw-HTWcj8lT7IRzDSvmdMK1YRZ8I6zJ-Hg&usqp=CAU";
  return (
    <div className="App">
      <header className="App-header">
      <Carousel>
                <div className = "firstItem">
                  {/*reuseable component to display main component*/}
                  <MainMintable/>
                    <img src={mainPageImage} style= {{width:'60%', zIndex:'1',}}/>
                    <AuthorCard authorName="Jack Ma"/>
                </div>
                <div className = "secondItem">
                    <img src={secondImage} style= {{position:'relative', display:'flex',justifyContent: 'center',alignItems: 'center',}}/>
                    <AuthorCard authorName="Elon Musk"/>
                </div>
                <div className = "thirdItem">
                    <img src={thirdImage} style= {{position:'relative', display:'flex',justifyContent: 'center',alignItems: 'center',}}/>
                    <AuthorCard authorName = "Long Bitcoin"/>
                </div>
        </Carousel>
      </header>
    </div>
  );
}

export default App;
