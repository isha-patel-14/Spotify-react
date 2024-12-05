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
import image11 from './assets/image11.png'
import heart from './assets/bx_bxs-heart.png'
import music from './assets/Music Player Options.png'
import rightOpt from './assets/Right options.png'

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

    <div className="shows">
        <div className="show1">
            <div><img src={image9} className="s-img"/></div>
            <div className="txt1">Weekly Motivatio...</div>
            <div className="txt2">author</div>
        </div>

        <div className="show1">
            <div><img src={image8} className="s-img" /></div>
            <div className="txt1">MEDITATION SELF</div>
            <div className="txt2">author</div>
        </div>

        <div className="show1">
            <div><img src={image7} className="s-img" /></div>
            <div className="txt1">Words beyond act...</div>
            <div className="txt2">author</div>
        </div>

        <div className="show1">
            <div><img src={image6} className="s-img" /></div>
            <div className="txt1">The Alexa Show</div>
            <div className="txt2">author</div>
        </div>

        <div className="show1">
            <div><img src={image5} className="s-img"/></div>
            <div className="txt1">The Stories of Ma...</div>
            <div className="txt2">author</div>
        </div>

        <div className="show1">
            <div><img src={image10} className="s-img" /></div>
            <div className="txt1">Motivation Daily b...</div>
            <div className="txt2">author</div>
        </div>
    </div>

    <div className="bottom-bar">
            <div className="img_1"><img src={image11} className='image11' />
                <div className="dream_on">Dreaming On <br />NEFFEX</div>
                <div><img src={heart} className="heart"/></div>
            </div>
            <div>
                <img src={music} className='music'/>
            </div>
            <div>
                <img src={rightOpt} className="img_2"/>
            </div>
    </div>

    <div className="green">
        <div className="listenOn"><img src={''}/>Listening on ASUS-ROG-G531GT</div>
    </div>


    </>
  )
}

export default App
