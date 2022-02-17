import React from 'react'
import './MainArea.css'
import { FaMedrt,FaFontAwesomeFlag,FaUserFriends,FaFacebookMessenger,FaAngleDown, FaSearch, FaGrin, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare } from 'react-icons/fa'
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai'
function MainArea(){
    return (
        <div className="Main">



            <div className="Rside">
            <div className="Profile">
                <img src="/images/ntr.jpg"alt="ntr"style={{height:"35px",padding:"1rem"}}/>
                Mounika
            </div>
            <div className="Pro">
                <FaMedrt color="red"font-size="2rem"/>
                <div>COVID-19 Information Center</div>
            </div>

            <br></br>
            <div className="Pro">
                <FaFontAwesomeFlag color="green"fontSize="1.7rem"/>
                <div>Page</div>
            </div>
            <br></br>

            <div className="Pro">
                <FaUserFriends color="blue"fontSize="1.7rem"/>
                <div>Friends</div>
            </div>

            <br></br>

            <div className="Pro">
                <FaFacebookMessenger color="blue"fontSize="1.7rem"/>
                <div>Messenger</div>
            </div>

            <br></br>

            <div className="Pro">
                <FaAngleDown color="blue"fontSize="1.7rem"/>
                <div>See More</div>
            </div>
            <br></br>
            <div className="Profiles">
                <img src="/images/logo1.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                React Developer
            </div>
            <div className="Profiles">
                <img src="/images/logo2.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                Reactjs Export
            </div>
            <div className="Profiles">
                <img src="/images/logo3.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                CSS Current
            </div>
            <div className="Profiles">
                <img src="/images/logo4.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                Java Script
            </div>
            <div className="Profiles">
                <img src="/images/logo5.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                Programming Jokes
            </div>
            <div className="Pross">
                <FaAngleDown color="blue" fontSize="1.7rem"/>See More
            </div>
            </div>


            <div className="MainArea">
            <div className="addStory">
            <div className="Story">
             <img src="/images/jr.jpg"alt="jr"style={{height:"220px",width:"110px",borderRadius:"70%"}}/>  
             
             Mounika
              
            </div>

            <div className="Story">
             <img src="/images/Mahesh.jpg"alt="jr"style={{height:"220px",width:"110px",borderRadius:"70%"}}/>  
        
             Mahesh babu
              
            </div>

            <div className="Story">
             <img src="/images/Samantha.jpg"alt="jr"style={{height:"220px",width:"100px",borderRadius:"70%"}}/>  
            Samantha
              
            </div>

            <div className="Story">
             <img src="/images/ntr.jpg"alt="jr"style={{height:"220px",width:"110px",borderRadius:"70%"}}/>  
             
             Ntr
              
            </div>

            
            </div>
            <div className="massage">
                <div className="text">
                    <div className="Post">
                        <img src="/images/jr.jpg"alt="jr"/>
                        <input type="Mind" placeholder="what's on your mind?"/>
                    </div>
                    <div className="Call">
                        <div className="ico">
                            <div className="icone">
                                <MdVideoCall fontSize="2.2rem"color="red"/>
                                <div>LiveVideo</div>
                            </div>
                            <div className="icone">
                                <AiFillFileImage fontSize="2.2rem"color="orange"/>
                                <div>Image/Video</div>
                            </div>
                            <div className="icone">
                                <FaGrin fontSize="2.2rem"color="grey"/>
                                <div>emoji</div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="Room">
                    <div className="RoomLnk">
                        <div className="Rooms">
                            <MdVideoCall fontSize="2rem"color="brown"/>
                            <div>Rooms</div>
                        </div>
                        <div className="Create">
                            <a href="createRoom">Create</a>
                        </div>
                    </div>
                    <div className="Images">
                        <div className="imag">
                            <img src="/images/Mahesh.jpg"alt="Img"style={{height:"40px",width:"40px",borderRadius:"50px"}}/>
                        </div>
                        <div className="imag">
                            <img src="/images/jr.jpg"alt="Img"style={{height:"40px",width:"40px",borderRadius:"50px"}}/>
                        </div>
                        <div className="imag">
                            <img src="/images/ntr.jpg"alt="Img"style={{height:"40px",width:"40px",borderRadius:"50px"}}/>
                        </div>
                        <div className="imag">
                            <img src="/images/Samantha.jpg"alt="Img"style={{height:"40px",width:"40px",borderRadius:"50px"}}/>
                        </div>
                        <div className="imag">
                            <img src="/images/chaitanya.jpg"alt="Img"style={{height:"40px",width:"40px",borderRadius:"50px"}}/>
                        </div>
                    </div>
                    <div className="Posted">
                        <div className="poster">
                            <div className="Meer">
                                <img src="/images/jr.jpg"alt="Img"style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
                                Mounika Bujji
                                <div className="update">updated her cover photo</div>

                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.6rem"/></div>
                        </div>
                        <div className="quotation">
                            Feel half mounika away like some figure in the background of an old picture.
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                            <img src="/images/ntr.jpg"alt="ntr"style={{height:"auto",width:"100%"}}/>
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="grey"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey"/>Comment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="Lside">
            <div className="Contact">
                <div className="Contacts">
                    Contacts
                </div>
    
            <div className="chaticon">
                <div className="icons">
                    <MdVideoCall fontSize="1.6rem"/>
                </div>

                <div className="icons">
                <FaSearch fontSize="1.6rem"/>
                </div>

                <div className="icons">
                    <MdMoreHoriz fontSize="1.6rem"/>
                </div>
            </div>
            </div>
            <div className="concise">
                <div className="Profilee">
                    <img src="images/jr.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                    Jr NTR
                </div>

                <div className="Profilee">
                    <img src="images/Mahesh.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                    MaheshBabu
                </div>

                <div className="Profilee">
                    <img src="images/Samantha.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                    Samantha
                </div>

                <div className="Profilee">
                    <img src="images/chaitanya.jpg"alt="logo"style={{height:"35px",padding:"1rem"}}/>
                    NagaChaitanya
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default MainArea