import React from 'react';
import './App.css';
import Mail from './components/Mail';

const mailto = "alliluya@yandex.ru";
const salesData = {
    mainInfo: {
      client: "Покупатель Покупателевич",
      order_id: "T-RP/00129"
    },
    blocks: [
      {
        title: "Информация о заказе",
        fields: [
          {
            title: "Заказчик",
            value: "Покупатель Покупателевич"
          },
          {
            title: "E-mail",
            value: "amozik@yandex.ru"
          },
          {
            title: "Адрес",
            value: "115487, г Москва, ул Садовая Б., д 45"
          },
          {
            title: "Телефон",
            value: "+7 902 266-44-63"
          },
          {
            title: "Исполнитель",
            value: "Группа компаний Fulogy"
          },
          {
            title: "Широков Евгений",
            value: "Менеджер"
          },
          {
            title: "Телефон",
            value: "+7(499)116-34-00"
          },
          {
            title: "Монтаж",
            value: "Да"
          }
        ]
      },
      {
        title: "Состав комплекта",
        fields: [
          {
            title: "Светильник по вашему размеру",
            value: "2 шт",
            sep: "dash"
          },
          {
            title: "Блок питания 100 Вт.",
            value: "1 шт",
            sep: "dash"
          },
          {
            title: "Крепления",
            value: "саморезы каждые 30 см",
            sep: "dash"
          },
          {
            title: "Комментарий",
            value: "Можно мне гаечный ключ вместо отвертки"
          },
          {
            title: "Конфигурация светильника (вариант 2)",
            value: "scheme"
          }
        ]
      },
      {
        title: "Технические характеристики",
        fields: [
          {
            title: "Длина 1-го светильника (L1)",
            value: "1375 мм"
          },
          {
            title: "Длина 2-го светильника (L2)",
            value: "2110 мм"
          },
          {
            title: "Вид профиля",
            value: "Накладной профиль с молочным рассеивателем"
          },
          {
            title: "Лента",
            value: "Светодиодная лента 24V SMD 2835 140LED/m 18W IP33 Day White LUX CRI 90"
          },
          {
            title: "Суммарная потребляемая мощность",
            value: "63 Вт"
          },
          {
            title: "Вывод питающего кабеля из светильника",
            value: "через заглушку"
          },
          {
            title: "Стык светильников",
            value: "под углом 45 градусов"
          },
          {
            title: "Длина кабеля до блока питания (Lcb)",
            value: "240 см"
          }
        ]
      }
    ],
    total: 14000
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { salesData, mailto };
  }

  sendMail() {
    const params = {
      email: this.state.mailto,
      message: document.querySelector('#mail-content').innerHTML,
      subject: 'Order'
    }
    
    fetch("http://chi2016.ru/sendmail/sendmail.php",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(params)
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
  }

  handleChange(e) {
    this.setState({ mailto: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div id="mail-content">
          <Mail content={this.state.salesData}/>
        </div>
        <input type="text" value={this.state.mailto} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.sendMail.bind(this)}>Send</button>
      </div>
    );
  }
}

