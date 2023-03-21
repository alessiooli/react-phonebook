import { Outlet, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';
import Roadmap from './roadmap';

export default function Layout() {
    return (
      <>
        <div className='layout-container'>
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
          <nav>
            <ul>
              <li>
                <Link to="/create">
                  <Button className='blue-text'>Create contacts</Button>
                </Link>
                
              </li>
              <li>
                <Link to="/read">
                  <Button className='blue-text'>Read contacts</Button>
                </Link>
              </li>
              <li>
                {/* <Link to="/update">
                  <Button className='blue-text'>Update contacts</Button>
                </Link> */}
              </li>
            </ul>
          </nav>
    
          {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
          <Outlet />
        </div>
        
        <div className='roadmap-container'>
            <h3 className="roadmap-title">Roadmap</h3>
            <Roadmap />
        </div>
      </>
    );
  }