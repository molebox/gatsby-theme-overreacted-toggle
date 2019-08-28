/** @jsx jsx */
import { jsx } from 'theme-ui'
import {DarkModeToggle} from 'gatsby-theme-overreacted-toggle'

export default () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '200px'
    }}>
        <DarkModeToggle/>
        <h1 sx={{
            color: 'accent'
        }}>Click the toggle to change sites color mode</h1>
    </div>
)