import { useEffect, useState } from "react";
import moveToSelected from "../../Utils/moveToSelected";
import "./carousel.css"
import "./projects.css"
import projects from "../../Utils/projects";
import * as THREE from 'three';

const Projects2 = () => {
    //these are the labels that represent position in shuffle of project cards
    const carouselLabels = ["selected", 'next', 'nextRightSecond', 'hideRight', 'hideRight'];

    useEffect(() => {
        handleLabels();
        console.log(projects, 'arrrrs')
    }, [])

    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('project-card')[i]?.classList.remove('hideRight')
            document.getElementsByClassName('project-card')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();
        moveToSelected('prev')

    }
    let handleClickRight = (e) => {
        e.preventDefault();
        moveToSelected('next');
    }


    return (<div id='projects-gallery'>
        <label htmlFor="projects" className="" style={{ display: 'block' }}>

            <div name='projects-select' id='projects-select'>
                <div className='arrow-spacer'>
                    <img alt="previous-option arrow" className={'white-arrow prev-3'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
                    <img alt="next-option arrow" className={'white-arrow next-3'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />
                </div>
                <div id="projects" >
                    <div>
                        {projects.map(project => (
                            <>
                                <div className="project-card">
                                    <div className="project-display">
                                        <h2>{project["name"]}</h2>
                                        <a href={project["link"]} className="image fit"><img
                                            src={project["image"]}
                                            alt="" /></a>
                                    </div>
                                    <div className="info">
                                        <h2>{project['title']}</h2>
                                        {project['info'].map(bullet => (
                                            <p>{bullet}</p>
                                        ))}
                                    </div>
                                </div>
                            </>

                        ))}
                    </div>
                </div>
            </div>

        </label >
    </div >)
}

export default Projects2;
