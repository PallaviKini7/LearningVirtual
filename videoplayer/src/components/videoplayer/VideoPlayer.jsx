import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import './VideoPlayer.css'
import axios from 'axios'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';

const VideoPlayer = () => {

    const [tab1, settab1] = useState(false)
    const [tab2, settab2] = useState(false)

    const toggle = () => {
        settab1(true)
        settab2(false)
    }
    const toggle2 = () => {
        settab1(false)
        settab2(true)

    }
    const [first, setfirst] = useState(false)

    const click =() =>
    {setfirst(true)}

    const fakeData = [
        {
            id: 1,
            title: '3.5 total hours video',
            image: require('../../assets/icons/Group 163.png'),
            chapter: 'chapter 1 content'
        },
        {
            id: 2,
            title: 'Support Files',
            image: require('../../assets/icons/Group 163.png'),
            chapter: 'chapter 2 content'
        },
        {
            id: 3,
            title: '6 Module Test',
            image: require('../../assets/icons/Group 163.png'),
            chapter: 'chapter 3 content'
        },
        {
            id: 1,
            title: '3.5 total hours video',
            image: require('../../assets/icons/Group 163.png'),
            chapter: 'chapter 4 content'
        },
        {
            id: 2,
            title: 'Support Files',
            image: require('../../assets/icons/Group 163.png'),
            chapter: 'chapter 4 content'
        },
    ]

    return (
        <div className='container'>
            <div className='left-section'>
                <div className='video'>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width='100%'
                        height='100%'
                        controls={true} />
                </div>
            </div>
            <div className='right-section'>
                <div className='tabs'>
                    <div className='tab-section'>

                        <div className={tab1 == true ? 'overview-active' : 'overview'} onClick={toggle}>Overview</div>
                        <div className={tab2 == true ? 'overview-active' : 'overview'} onClick={toggle2}>Chapter</div>
                    </div>
                </div>
                <div className='overview-content'>
                    {
                        tab1 == true ?
                            <>
                                <div className='course-include'>Course Includes</div>
                                <div className='below-section'>

                                    {
                                        fakeData.map(
                                            item =>
                                            (

                                                <div className='videodesc'>
                                                    <div className='icon'><img src={item.image} alt="" /></div>
                                                    <div className='text'>{item.title}</div>
                                                </div>
                                            )
                                        )
                                    }


                                </div>
                            </> :
                            <>
                                <div className='course-include'>Course Content</div>
                                <div >5 chapters | 8 hours |3 days</div>
                                <div className='below-section'>
                                    {
                                        fakeData.map(item =>
                                        (
                                            <div className='chapter'>
                                                <div className='chapter-content'>{item.chapter}</div>
                                                <div className='chapter-image' onClick={click}>
                                                    {
                                                        first ==true?
                                                        
                                                        <img src={require('../../assets/icons/minus.png')} alt="" />
                                                        
                                                        :
                                                        
                                                        <img src={require('../../assets/icons/Arrow.png')} alt="" />
                                                        
                                                        
                                                    }
                                                </div>
                                                    
                                            </div>
                                        )
                                        )
                                    }


                                </div>
                            </>


                    }

                </div>
            </div>

        </div>
    )
}

export default VideoPlayer