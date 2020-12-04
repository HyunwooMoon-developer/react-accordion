/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Accordion.css'

class Accordian extends React.Component{
    static defaultProps = {
        sections : []
    }

    state = {
        activeSectionIndex : null
    }

   buttonClick(item){
        this.setState({activeSectionIndex : item})
    }

    renderButton = (sections, index, activeSectionIndex) => {
        return(<li key={index} className="accordion-content">
       <button
          onClick={() => this.buttonClick(index)}> 
            {sections.title}
        </button>
        <br />
    {(activeSectionIndex === index) && <p>{sections.content}</p>}
    </li>
    )}
    render = () =>{
        const {sections} = this.props;
        const {activeSectionIndex} = this.state ;
        return (
            <ul className="accordion-container">
               {sections.map((section, index) => this.renderButton(section, index, activeSectionIndex)
               )}
            </ul>
        )
    }
}

export default Accordian;