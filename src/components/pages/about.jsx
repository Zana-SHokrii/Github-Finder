import React from 'react'
import packageJson from '../../../package.json'

function About() {
    return (
        <div className="about">
            <h1>About Github Finder</h1>
            <p>App Name: <strong>{packageJson.name}</strong></p>
            <p>App Version: <strong>{packageJson.version}</strong></p>        
            <p>My Github: <strong><a href="https://github.com/Zana-SHokrii" target='_blank'>Link</a></strong></p>        
        </div>
    )
}

export default About