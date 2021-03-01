import React from 'react';

function ImageUpload({history}){
    return (
        <div className="content">
            <div className="image_file_up_wrap content_box">
                <p className="content_title" >이미지 올리기</p>
                <div className="image_file_up">
                    <form>
                        <fieldset>
                            <legend>image file upload</legend>
                            <div className="image_file_up_input">
                                <ul>
                                    <li><input type="file" /></li>
                                    <li><div className="image_on"><p>여기에 파일 놓기</p></div></li>
                                    <li>사진이름<input type="text" placeholder="보여지는 이름 설정" /></li>
                                    <li>태그설정<input type="text" placeholder="#blue #sky" /></li>
                                    <li>가격설정<input type="text" placeholder="1,000원" /></li>
                                </ul>
                                <ul className="save_bt">
                                    <li><a href="#">저장</a></li>
                                </ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="image_file_ck content_box">
                <p className="content_title" >등록된 이미지 확인</p>
                <div className="image_file_up_ck">
                    <form>
                        <fieldset>
                            <legend>image file upload ck</legend>
                            <div className="image_file_up_ck_text">
                                <ul>
                                    <li><div className="image_file_up_box"><img src="image/cloud.jpg" /></div></li>
                                    <li>파일이름:<p>syk01.jpg</p></li>
                                    <li>사진이름:<p>blue sky</p></li>
                                    <li>태그:<p>#blue #sky</p></li>
                                    <li>가격(원):<p>1,000</p></li>
                                </ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="image_file_up_ck_end"><p>이미지가 등록되었습니다.</p></div>
            </div>
        </div>
    )
}

export default ImageUpload;