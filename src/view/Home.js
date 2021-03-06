import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';


function Home({history}) {

  const userData = useSelector(state => state);
  console.log(userData);
  useEffect(() => {
    if(!userData.authenticated.login){
      history.push("/login")
    }
  }, [userData])

  
  return (
    <div className="content">
            <div className="pass_change_wrap content_box">
                <form>
                    <fieldset>
                        <legend>password change</legend>
                        <div className="pass_change">
                            <p className="content_title">회원정보 변경</p>
                            <ul>
                                <li>아이디 :<p>web2p</p></li>
                                <li>비밀번호<input type="password" placeholder="Enter Password" /></li>
                                <li>비밀번호 확인<input type="password" placeholder="Enter Confirm Password" /></li>
                                <li>E-mail :<p>web2p@web2p.com</p></li>
                            </ul>
                            <ul className="save_bt">
                                <li><a href="#">저장</a></li>
                            </ul>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="image_graph_wrap content_box">
                <p className="content_title">월별 수입</p>
                <div className="image_graph">
                    <ul>
                        <li>
                            <div className="graph_bar"><span style={{"height":" 50%"}}></span></div>
                            <p>1</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "20%"}}></span></div>
                            <p>2</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "5%"}}></span></div>
                            <p>3</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "71%"}}></span></div>
                            <p>4</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "55%"}}></span></div>
                            <p>5</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "70%"}}></span></div>
                            <p>6</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "40%"}}></span></div>
                            <p>7</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "80%"}}></span></div>
                            <p>8</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "20%"}}></span></div>
                            <p>9</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "10%"}}></span></div>
                            <p>10</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "52%"}}></span></div>
                            <p>11</p>
                        </li>
                        <li>
                            <div className="graph_bar"><span style={{"height": "43%"}}></span></div>
                            <p>12</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="image_up_bt content_box">
                <p className="content_title">이미지 업로드</p>
                <div className="image_up_bt_img">
                    <a href="/image-upload">
                        <svg viewBox="1 -47 511.999 511" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="m469.488281 84.417969h-4.390625c-2.570312-22.023438-20.292968-39.484375-42.441406-41.621094-2.542969-23.742187-22.683594-42.296875-47.085938-42.296875h-302.21875c-40.445312 0-73.351562 32.90625-73.351562 73.347656v211.902344c0 24.574219 18.804688 44.828125 42.773438 47.144531 2.515624 23.488281 22.261718 41.886719 46.3125 42.273438.0625 4.167969.714843 8.191406 1.898437 11.988281 5.386719 17.292969 21.550781 29.882812 40.59375 29.882812h337.910156c23.441407 0 42.511719-19.070312 42.511719-42.507812v-247.601562c0-23.441407-19.070312-42.511719-42.511719-42.511719zm22.511719 42.511719v163.738281l-43.5-32.859375c-11.886719-8.976563-27.960938-9.117188-40-.347656l-55.027344 40.09375-104.9375-108.1875c-12.5-12.890626-32.839844-13.683594-46.304687-1.800782l-93.160157 82.191406v-142.828124c0-12.414063 10.097657-22.511719 22.507813-22.511719h337.910156c12.414063 0 22.511719 10.097656 22.511719 22.511719zm0 247.597656c0 12.414062-10.097656 22.511718-22.507812 22.511718h-337.914063c-10.082031 0-18.640625-6.667968-21.492187-15.824218-.660157-2.113282-1.015626-4.359375-1.015626-6.683594v-78.105469l106.394532-93.863281c5.441406-4.804688 13.660156-4.484375 18.714844.726562l47.359374 48.828126c0 .003906 0 .003906.003907.003906l94.261719 97.183594c1.960937 2.023437 4.566406 3.039062 7.179687 3.039062 2.507813 0 5.019531-.9375 6.960937-2.820312 3.960938-3.847657 4.058594-10.175782.214844-14.140626l-22.625-23.328124 52.742188-38.425782c4.867187-3.546875 11.363281-3.492187 16.167968.136719l55.554688 41.964844zm-429.5-46.707032v-236.109374c0-1.003907.050781-2 .152344-2.976563 1.492187-14.675781 13.925781-26.164063 28.988281-26.164063h122.320313c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10h-122.320313c-27.097656 0-49.140625 22.042969-49.140625 49.140626v220.976562c-12.777344-2.300781-22.5-13.503906-22.5-26.9375v-211.902344c0-29.414062 23.933594-53.347656 53.351562-53.347656h302.21875c13.273438 0 24.371094 9.503906 26.84375 22.070312h-108.453124c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 10 10 10h118.96875.011718 5.128906c13.195313 0 24.242188 9.394532 26.800782 21.847657h-313.292969c-23.4375 0-42.507813 19.070312-42.507813 42.511719v164.976562.007812 63.253907c-14.722656-.417969-26.570312-12.523438-26.570312-27.347657zm0 0"/><path d="m388.515625 145.117188c-23.601563 0-42.796875 19.199218-42.796875 42.792968 0 23.597656 19.199219 42.796875 42.796875 42.796875 23.59375 0 42.792969-19.199219 42.792969-42.796875 0-23.59375-19.199219-42.792968-42.792969-42.792968zm0 65.589843c-12.570313 0-22.796875-10.226562-22.796875-22.792969 0-12.570312 10.226562-22.796874 22.796875-22.796874 12.566406 0 22.792969 10.226562 22.792969 22.796874 0 12.566407-10.226563 22.792969-22.792969 22.792969zm0 0"/><path d="m244.730469 56.398438c.25.601562.558593 1.179687.917969 1.722656.363281.546875.78125 1.058594 1.242187 1.519531.460937.457031.96875.878906 1.519531 1.25.539063.359375 1.128906.667969 1.730469.917969.597656.25 1.230469.441406 1.871094.570312.636719.128906 1.296875.191406 1.949219.191406.660156 0 1.308593-.0625 1.960937-.191406.636719-.128906 1.257813-.320312 1.867187-.570312.601563-.25 1.179688-.558594 1.722657-.917969.546875-.371094 1.058593-.792969 1.519531-1.25.46875-.460937.878906-.972656 1.25-1.519531.359375-.542969.667969-1.121094.917969-1.722656.25-.609376.441406-1.238282.570312-1.867188.128907-.652344.191407-1.3125.191407-1.960938 0-.652343-.0625-1.3125-.191407-1.949218-.128906-.640625-.320312-1.273438-.570312-1.871094-.25-.609375-.558594-1.191406-.917969-1.730469-.371094-.550781-.78125-1.058593-1.25-1.519531-.460938-.460938-.972656-.878906-1.519531-1.242188-.542969-.359374-1.121094-.667968-1.722657-.917968-.609374-.25-1.230468-.441406-1.867187-.570313-1.292969-.261719-2.621094-.261719-3.910156 0-.640625.128907-1.273438.320313-1.871094.570313-.601563.25-1.191406.558594-1.730469.917968-.550781.363282-1.058594.78125-1.519531 1.242188s-.878906.96875-1.242187 1.519531c-.359376.539063-.667969 1.121094-.917969 1.730469-.25.597656-.441407 1.230469-.570313 1.871094-.128906.636718-.199218 1.296875-.199218 1.949218 0 .648438.070312 1.308594.199218 1.960938.128906.628906.320313 1.257812.570313 1.867188zm0 0"/></svg>
                    </a>
                </div>
            </div>
            <div className="image_edit_bt content_box">
                <p className="content_title">이미지수정 및 삭제</p>
                <div className="image_edit_bt_img">
                    <a href="/image-edit">
                        <svg version="1.1" fill="#fff" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{"enableBackground":"new 0 0 512 512"}} xmlSpace="preserve">
                        <g>
                            <g>
                                <path d="M502,98c5.523,0,10-4.477,10-10V40c0-5.523-4.477-10-10-10h-48c-5.523,0-10,4.477-10,10v14H174.826
                                    c-5.523,0-10,4.477-10,10s4.477,10,10,10H444v14c0,5.523,4.477,10,10,10h14v316h-14c-5.523,0-10,4.477-10,10v48
                                    c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-48c0-5.523-4.477-10-10-10h-14V98H502z M492,434v28h-28v-28H492z M464,78V50
                                    h28v28H464z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M135.987,54h-35c-5.523,0-10,4.477-10,10s4.477,10,10,10h35c5.523,0,10-4.477,10-10S141.51,54,135.987,54z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M419.07,440.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
                                    c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S420.93,442.79,419.07,440.93z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M373,438H68v-14c0-5.523-4.477-10-10-10H44V98h14c5.523,0,10-4.477,10-10V40c0-5.523-4.477-10-10-10H10
                                    C4.477,30,0,34.477,0,40v48c0,5.523,4.477,10,10,10h14v316H10c-5.523,0-10,4.477-10,10v48c0,5.523,4.477,10,10,10h48
                                    c5.523,0,10-4.477,10-10v-14h305c5.523,0,10-4.477,10-10S378.523,438,373,438z M20,78V50h28v28H20z M48,462H20v-28h28V462z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M398,102h-97c-5.523,0-10,4.477-10,10s4.477,10,10,10h97c12.131,0,22,9.869,22,22v178.444l-69.559-91.025
                                    c-9.529-12.47-24.566-19.315-40.23-18.3c-15.661,1.011-29.695,9.729-37.542,23.319l-45.958,79.603l-24.409-37.084
                                    c-6.647-10.099-17.833-16.228-29.922-16.396c-12.095-0.143-23.44,5.65-30.364,15.56L92,349.709V144c0-12.131,9.869-22,22-22
                                    h107.333c5.523,0,10-4.477,10-10s-4.477-10-10-10H114c-23.159,0-42,18.841-42,42v224c0,23.159,18.841,42,42,42h155.993
                                    c0.005,0,0.011,0.001,0.016,0.001s0.009-0.001,0.014-0.001H398c23.159,0,42-18.841,42-42V144C440,120.841,421.159,102,398,102z
                                    M114,390c-7.814,0-14.684-4.098-18.588-10.254l63-90.169c3.168-4.536,8.131-7.126,13.692-7.016
                                    c5.533,0.076,10.451,2.771,13.493,7.393L251.446,390H114z M420,368c0,12.131-9.869,22-22,22H275.39l-36.376-55.267l50.976-88.294
                                    c4.563-7.903,12.403-12.773,21.51-13.361c9.104-0.583,17.509,3.234,23.05,10.485L420,355.384V368z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M266.57,104.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
                                    s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93s2.93-4.44,2.93-7.07S268.43,106.79,266.57,104.93z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M206.826,156.345c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S229.985,156.345,206.826,156.345z
                                    M206.826,220.345c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22
                                    C228.826,210.476,218.957,220.345,206.826,220.345z"/>
                            </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>
                    </a>
                </div>
            </div>
    </div>
  );
}

export default Home;
