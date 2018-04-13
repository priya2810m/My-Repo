import React from 'react';
import CSSLoader from './CSS/homepage.css'

class Home extends React.component{
    render(){
        return(
            <div>
                <h2>Leave Management system</h2>
                <table>
                   <td> 
                    <th>Month</th>
                    <th>Count</th>
                   </td>
                    <tr>
                        <td>January</td> 
                        <td></td>
                    </tr>
                    <tr>
                        <td>February</td> 
                        <td></td>
                    </tr>  
                    <tr>  
                        <td>March</td> 
                        <td></td>
                    </tr>
                    <tr>
                        <td>April</td>
                        <td></td> 
                    </tr>
                    <tr>
                        <td>May</td>
                        <td></td>
                    </tr> 
                    <tr>
                        <td>June</td>
                        <td></td>
                    </tr> 
                    <tr>
                        <td>July</td> 
                        <td></td>
                    </tr>
                    <tr>
                        <td>August</td>
                        <td></td> 
                    </tr>
                    <tr>
                        <td>September</td>
                        <td></td> 
                    </tr>
                    <tr>
                        <td>October</td>
                        <td></td> 
                    </tr>
                    <tr>
                        <td>November</td> 
                        <td></td>
                    </tr>
                    <tr>
                         <td>December</td>
                         <td></td> 
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                    </tr>
                </table> 
                {/*<div class="btn-group">
                    <button>Filter</button>
                    <a href={'/add'} class="btn-group" role="button">Add</a>
                </div> */}
            </div>
        );
    }
}
export default Home;