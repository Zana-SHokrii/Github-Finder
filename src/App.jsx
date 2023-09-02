import React, { Component } from "react"
import axios from "axios"
// import image
import search_Svg from './assets/search.svg'
import user_Svg from './assets/user.svg'
import setting_Svg from './assets/setting.svg'
// controll settings
import { setting } from './components/user/settings'
// inport pages
import Result from './components/pages/result'
import About from './components/pages/about'

export default class App extends Component {

    // states
    state = {
        text: '',
        about: true,
        tab: 'All',
        users: [],
        loading: false
    }

    componentDidMount () {
        // controll s key
        document.addEventListener('keydown', (event) => {
            // if(event.key == "s") 
            document.getElementById('quick-access').focus()
        });
    }

    render () {

        // shorten states variables
        const {text, about, tab, users, loading} = this.state

        // handle pages
        const handlePage = page => {
            if(tab === page) return

            this.setState({tab: page})
        }

        // handel text
        const handleText = async e => {
            this.setState({text: e.target.value})

            this.setState({loading: true})
            //const result = await axios.get(`https://api.github.com/search/users?q=${e.target.value}`)
            const result = await axios.get(`https://api.github.com/search/users?q=${e.target.value}&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`)
            this.setState({users: result.data.items, loading: false})
        }

        return (

            <div className="box">

                <div className="search">
                    <div className="search-icon">
                        <img src={search_Svg} alt="seacrh icon" />
                    </div>
                    <input type="text" placeholder="Searching is easier" id="quick-access" spellCheck="false" value={text} onChange={handleText} autoComplete="false" />
                    {
                        text !== '' &&
                        <div className="clear">
                            <a onClick={() => this.setState({text: ''})}>Clear</a>
                        </div>
                    }
                    {
                        text === '' &&
                        <div className="quick-access">
                            <a><strong>S</strong> quick access</a>
                        </div>
                    }
                </div>

                {
                    (text !== '' && loading!== true ) &&
                    
                    <div className="tabs">
                        <br />
                        {
                            tab === 'All' ? <a id="selected" onClick={() => handlePage('All')}>All <span>{users.length}</span></a> : <a onClick={() => handlePage('All')}>All <span>{users.length}</span></a>
                        }
                        {
                        about &&
                            <a id={tab === 'About' ? 'selected' : null} onClick={() => handlePage('About')}><strong><img src={user_Svg} alt="about icon" /></strong> About</a>
                        }
                        <div className="setting">
                            <div className="setting-icon">
                                <img src={setting_Svg} alt="setting icon" onClick={setting} id="setting-icon" />
                            </div>
                            <div className="menu close" id="setting-menu">
                                <a><img src={user_Svg} alt="about icon" /> About</a>
                                <label className="switch">
                                    <input type="checkbox" checked={about} onChange={(e) => this.setState({about: e.target.checked, tab: 'All'})} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <hr />
                    </div>
                }

                {
                    text !== '' &&
                    <div className="pages">
                        {
                            tab === 'All'
                            ? <Result loading={loading} users={users}/>
                            : <About /> 
                        }
                    </div>
                }
            </div>
        )

    }
}