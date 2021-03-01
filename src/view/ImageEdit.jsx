import React from 'react';

function ImageEdit(){
    return (
        <div className="content">
            <div className="image_file_all content_box">
                <p className="content_title">이미지 선택</p>
                <div className="image_search">
                    <form>
                        <fieldset>
                            <legend>image search</legend>
                            <div className="image_search_input">
                                <ul>
                                    <li><input type="text" /><img src="image/search.png" /></li>
                                </ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="image_all">
                    <ul>
                        <li><div className="image_all_hidden"><img src="image/cloud.jpg"/></div><p>img 01</p></li>
                        <li><div className="image_all_hidden"><img src="image/balloons.jpg"/></div><p>img 02</p></li>
                        <li><div className="image_all_hidden"><img src="image/sea.jpg"/></div><p>img 03</p></li>
                        <li><div className="image_all_hidden"><img src="image/cloud.jpg"/></div><p>img 04</p></li>
                        <li><div className="image_all_hidden"><img src="image/balloons.jpg"/></div><p>img 05</p></li>
                        <li><div className="image_all_hidden"><img src="image/sea.jpg"/></div><p>img 06</p></li>
                        <li><div className="image_all_hidden"><img src="image/cloud.jpg"/></div><p>img 07</p></li>
                        <li><div className="image_all_hidden"><img src="image/balloons.jpg"/></div><p>img 08</p></li>
                        <li><div className="image_all_hidden"><img src="image/sea.jpg"/></div><p>img 09</p></li>
                        <li><div className="image_all_hidden"><img src="image/cloud.jpg"/></div><p>img 010</p></li>
                    </ul>
                    <ul className="image_all_list">
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div className="image_file_edit content_box">
                <p className="content_title">이미지수정</p>
                <div className="image_file_edit_box">
                    <form>
                        <fieldset>
                            <legend>image edit</legend>
                            <div className="image_file_edit_input">
                                <ul>
                                    <li><div className="image_edit_ck"><img src="image/cloud.jpg"/></div></li>
                                    <li>파일이름:<p>syk01.jpg</p></li>
                                    <li>사진이름<input type="text" placeholder="보여지는 이름 설정"/></li>
                                    <li>태그설정<input type="text" placeholder="#blue #sky"/></li>
                                    <li>가격설정<input type="text" placeholder="1,000원"/></li>
                                </ul>
                                <div className="bt_box">
                                    <ul className="save_bt">
                                        <li><a href="#">저장</a></li>
                                    </ul>
                                    <ul className="delete_bt">
                                        <li><a href="#">삭제</a></li>
                                    </ul>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImageEdit;