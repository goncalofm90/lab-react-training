import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
// import NumbersTable from './components/NumbersTable';
import SignupPage from './components/SignupPage';
import Dice from './components/Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <IdCard
        lastName="Mr. Sniffles"
        firstName="'Cena's Dog' "
        gender="Male"
        height="1.78"
        birthdate={new Date('1992-07-14')}
        picture="https://tinyurl.com/yxjuxwdz"
      />
      <div className="greetings">
        <Greetings lang="de">Sniffles</Greetings>
      </div>
      <div className="random">
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div class="colorbox">
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className="container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>DriverCard</h1>

      <div className="containerColumn">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Ford Mustang',
            licensePlate: 'IR0N',
          }}
        />
        <DriverCard
          name="Mr. Cena"
          rating={4.9}
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1046px-John_Cena_July_2018.jpg"
          car={{
            model: 'Mercedes Benz',
            licensePlate: 'BE33ERZ',
          }}
        />
        <div className="clickpicture">
          <h1>Click me</h1>
          <ClickablePicture />
        </div>
        <div className="dicepicture">
          <Dice />
        </div>
        {/* <div>
          <NumbersTable limit={12} />
        </div> */}
      </div>
      <SignupPage />
    </div>
  );
}

export default App;
