/**
 * Created by erikmiller on 1/12/17.
 */
import React, { Component } from 'react';
import Pin from './Pin';

class PinList extends Component{

    constructor(props){
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
            scaleFactor: props.scaleFactor
        }
    }

    setStyles(){
        return {
            width: window.innerWidth * 0.8,
            height: window.innerHeight
        }
    }

    render(){
        return(
            <ul id="PinList" style={this.setStyles()}>
                <Pin
                    x={this.state.width * 0.73}
                    y={this.state.height * 0.35}
                    updateInfo={this.props.updateInfo}
                    region="South Asia"
                    scale={this.state.scaleFactor}
                    projects={[
                        {
                            "title": "Nepal",
                            "link": "http://www.oired.vt.edu/past-projects/Nepal.html",
                            "description": "Virginia Tech partnership with Yale University and Principia College to establish the Memorial Center of Excellence in Teaching and Learning at the Institute of Forestry in Pokhara, Nepal."
                        },
                        {
                            "title": "RMP",
                            "link": "http://www.oired.vt.edu/past-projects/RMP.html",
                            "description": "the Research Management Project in Bangladesh."
                        },
                        {
                            "title": "Bangladesh",
                            "link": "http://www.oired.vt.edu/past-projects/Bangladesh.html",
                            "description": "the Partnership to Improve the Status and Opportunities for Women in Bangladesh."
                        }
                    ]}
                />

                <Pin
                    x={this.state.width * 0.42}
                    y={this.state.height * 0.45}
                    updateInfo={this.props.updateInfo}
                    region="West Africa"
                    scale={this.state.scaleFactor}
                    projects={[
                        {
                            "title": "MFSRE",
                            "link": "http://www.oired.vt.edu/past-projects/mfsre.html",
                            "description": "the Mali Farming Systems Research and Extension Project."
                        },
                        {
                            "title": "CBNRM",
                            "link": "http://www.oired.vt.edu/past-projects/CBNRM.html",
                            "description": "the Community-Based Natural Resources Management Project in Senegal."
                        },
                        {
                            "title": "SRP",
                            "link": "http://www.oired.vt.edu/past-projects/SRP.html",
                            "description": "the Senegal Reforestation Project."
                        },
                        {
                            "title": "AFRICA IPM",
                            "link": "http://www.oired.vt.edu/past-projects/",
                            "description": "the Africa IPM Link Project in Sub-Saharan Africa."
                        }
                    ]}
                />

                <Pin
                    x={this.state.width * 0.57}
                    y={this.state.height * 0.51}
                    updateInfo={this.props.updateInfo}
                    region="East Africa"
                    scale={this.state.scaleFactor}
                    projects={[
                        {
                            "title": "Peanut CRSP",
                            "link": "http://www.oired.vt.edu/past-projects/PeanutCRSP.html",
                            "description": "Peanut Collaborative Research Support Program."
                        },
                        {
                            "title": "South Sudan I",
                            "link": "http://www.oired.vt.edu/past-projects/Sudan.html",
                            "description": "Higher Education in Africa Initiative."
                        },
                        {
                            "title": "AMAREW",
                            "link": "http://www.oired.vt.edu/past-projects/AMAREW.html",
                            "description": "the Amhara Microenterprise Development, Agricultural Research, Extension & Watershed Management Project in Ethiopia."
                        },
                    ]}
                />

                <Pin
                    x={this.state.width * 0.54}
                    y={this.state.height * 0.20}
                    updateInfo={this.props.updateInfo}
                    region="Eastern Europe"
                    scale={this.state.scaleFactor}
                    projects={[
                        {
                            "title": "SARA",
                            "link": "http://www.oired.vt.edu/past-projects/SARA.html",
                            "description": "Support for Agricultural Restructuring in Albania."
                        },
                        {
                            "title": "MTI",
                            "link": "http://www.oired.vt.edu/past-projects/MTI.html",
                            "description": "the Moscow Technology Incubator Project."
                        },
                        {
                            "title": "PPMP",
                            "link": "http://www.oired.vt.edu/past-projects/PPMP.html",
                            "description": "the Pest and Pesticide Management Project in the Ukraine."
                        },
                    ]}
                />

                <Pin
                    x={this.state.width * 0.56}
                    y={this.state.height * 0.34}
                    updateInfo={this.props.updateInfo}
                    region="Middle East"
                    scale={this.state.scaleFactor}
                    projects={[
                        {
                            "title": "EGYPT",
                            "link": "http://www.oired.vt.edu/past-projects/Egypt.html",
                            "description": "the Management Development Initiative (MDI) - an Information Technology (IT) Project in Egypt."
                        },
                        {
                            "title": "MERC",
                            "link": "http://www.oired.vt.edu/past-projects/MERC.html",
                            "description": "the Middle East Research Cooperation Project, with work in Egypt and Israel."
                        },
                    ]}
                />

                <Pin
                    x={this.state.width * 0.82}
                    y={this.state.height * 0.51}
                    updateInfo={this.props.updateInfo}
                    region="Southeast Asia"
                    scale={this.state.scaleFactor}
                    projects={[
                        {
                            "title": "IPM SECP",
                            "link": "http://www.oired.vt.edu/past-projects/SECP.html",
                            "description": "Virginia Tech received a sub-grant from Madecor for work in Indonesia with the Integrated Pest Management for Smallholder Estate Crops Program in 1998-2003."
                        },
                    ]}
                />

                <Pin
                    x={this.state.width * 0.225}
                    y={this.state.height * 0.39}
                    updateInfo={this.props.updateInfo}
                    region="Caribbean"
                    scale={this.state.scaleFactor}
                    projects={[
                        {
                            "title": "ESIH",
                            "link": "http://www.oired.vt.edu/past-projects/Haiti.html",
                            "description": "partnership with Ecole Supérieure d'Infotronique d'Haïti (ESIH) in Port-au-Prince, Haiti"
                        },
                    ]}
                />
            </ul>
        );
    }

}

export default PinList;
