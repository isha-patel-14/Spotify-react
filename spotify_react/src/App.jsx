import './App.css'
import logo from './assets/Spotify logo.png'
import home from './assets/Home (2).png' 
import search from './assets/Search (2).png'
import lib from './assets/Your library.png'
import create from './assets/Create (2).png'
import like from './assets/Liked (2).png'
import episode from './assets/your episodes.png'
import icon from './assets/grommet-icons_install-option.png'
import topArrow from './assets/top arrow navigation.png'
import user from './assets/User.png'
import image4 from './assets/image4.png'
import image3 from './assets/image3.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image9 from './assets/image9.png'
import image8 from './assets/image8.png'
import image7 from './assets/image7.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image10 from './assets/image10.png'



function App() {

  return (
    <>
      <div className="sidebar">
        <div className="home">
            <div className="logo">
                <img src={logo} className='logo_spotify'/>
            </div>
            <div className="home1">
                <img src={home} className="h_img"/>
                Home
            </div>
            <div><img  src={search} className="h_img"/>Search</div>
            <div><img  src={lib} className="h_img"/>Your Library</div>
        </div>

        <div className="playlist">
            <div><img src={create} className="h_img"/>Create Playlist</div>
            <div><img src={like} className="h_img" />Liked Songs</div>
            <div><img src={episode} className="h_img" />Your Episodes</div>
        </div>

        <div className="fav">
            <div className="FAV">FAV</div>
            <div className="f_img">DailyMix1</div>
            <div className="f_img">DiscoverWeekly</div>
            <div className="f_img">Malyalam</div>
            <div className="f_img">Dance/ElectronicMix</div>
            <div className="f_img">EDM/Popular</div>
        </div>

        <div className="install">
            <div><img src={icon} className="i_img" />Install App</div>
        </div>
    </div>

    <div className="nav">
        <div><img src={topArrow} class="nav-i1"/></div>
        <div><img src={user} class="nav-i2"/></div>
    </div>

    <h2 className="mrng_text">Good morning</h2>

    <div className="morning">
        <div className="mrng">
            <img src={like} className="m_img"/>
            <div className="text">Liked Songs</div>
        </div>
        <div className="mrng">
            <img src={image4} className="m_img"/>
            <div className="text1">Neffex Playlist</div>
        </div>
        <div className="mrng">
            <img src={image3} className="m_img"/>
            <div className="text3">K/DA</div>
        </div>
        <div className="mrng">
            <img src={image1} className="m_img"/>
            <div className="text">Liked Songs</div>
        </div>
        <div className="mrng">
            <img src={image2} className="m_img"/>
            <div className="text2">Dance/Electronic Mix</div>
        </div>
    </div>

    <h2 className="shows_heading">Shows you might like</h2>

    <div class="shows">
        <div class="show1">
            <div><img src={image9} class="s-img"/></div>
            <div class="txt1">Weekly Motivatio...</div>
            <div class="txt2">author</div>
        </div>

        <div class="show1">
            <div><img src={image8} class="s-img" /></div>
            <div class="txt1">MEDITATION SELF</div>
            <div class="txt2">author</div>
        </div>

        <div class="show1">
            <div><img src={image7} class="s-img" /></div>
            <div class="txt1">Words beyond act...</div>
            <div class="txt2">author</div>
        </div>

        <div class="show1">
            <div><img src={image6} class="s-img" /></div>
            <div class="txt1">The Alexa Show</div>
            <div class="txt2">author</div>
        </div>

        <div class="show1">
            <div><img src={image5} class="s-img"/></div>
            <div class="txt1">The Stories of Ma...</div>
            <div class="txt2">author</div>
        </div>

        <div class="show1">
            <div><img src={image10} class="s-img" /></div>
            <div class="txt1">Motivation Daily b...</div>
            <div class="txt2">author</div>
        </div>
    </div>

    <div class="bottom-bar">
            <div class="img1"><img style="height: 55px; " src="./image11.png">
                <div style="margin-left: 10px;">DreamingOn</div>
                <div><img style="height: 20px; margin-left: 10px;" src="./bx_bxs-heart.png"></div>
            </div>
            <div>
                <img style="height: 60px; margin-top: 10px;" src="./Music Player Options.png">
            </div>
            <div>
                <img class="img2" style="height: 23px; margin-top: 30px;" src="./Right options.png">
            </div>
    </div>

    <div class="green">
        <div style="margin-right: 75px; font-weight: bold;"><img src="./">Listening on ASUS-ROG-G531GT</div>
    </div>


    </>
  )
}

export default App
