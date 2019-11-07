import React from 'react';
import Block from './Block';

export default class Mail extends React.Component {
    
    render() {
      const blocksArr = Array.isArray(this.props.content.blocks) && this.props.content.blocks || [];
      const blocksHtml = blocksArr.map((block, i) => <Block key={i} title={block.title} fields={block.fields}/>);
      
      return (
        <div style={{ marginTop: '30px', width: '600px', textAlign: 'left', fontSize: '16px', fontFamily: 'Arial'}}>
            <div>Здравствуйте, {this.props.content.mainInfo.client}</div>
            <div>Ваш заказ № {this.props.content.mainInfo.order_id} оформлен</div>
            <div>Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для подтверждения заказа.</div>
            { blocksHtml }
            <p>ИТОГО: {this.props.content.total} РУБ.</p>
        </div>
      );
    }
  }