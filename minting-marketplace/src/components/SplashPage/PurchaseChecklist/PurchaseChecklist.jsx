import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const PurchaseChecklist = ({ openCheckList, toggleCheckList, nameSplash, backgroundColor }) => {
    const { primaryColor } = useSelector(store => store.colorStore)
    const [purchaseList, setPurshaseList] = useState(true);

    const dappUrl = window.location.host;
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;

    const togglePurchaseList = () => {
        setPurshaseList(prev => !prev);
    }

    return (
        <div style={{
            display: `${openCheckList ? "block" : "none"}`,
            color: "white",
            background: `${primaryColor === "charcoal" ? backgroundColor.darkTheme : backgroundColor.lightTheme}`
        }}
            className="tutorial-checklist">
            <h5>{nameSplash} purchase checklist</h5>
            <div className="tutorial-show-list" onClick={() => togglePurchaseList()}>
                <i className={`fas fa-chevron-${purchaseList ? "down" : "up"}`}></i>
            </div>
            <div className="tutorial-close" onClick={() => toggleCheckList()}>
                <i className="fas fa-times"></i>
            </div>
            <ul style={{ display: `${purchaseList ? "block" : "none"}` }}>
                <li>1. Make sure you have the
                    <a
                        href={metamaskAppDeepLink}
                        target="_blank"
                        rel="noreferrer"
                    > metamask extension </a>
                    installed
                </li>
                <li>2. Click connect wallet in top right corner. You must be  fully logged into metamask with your password first</li>
                <li>3. Sign the request to complete login. You can’t purchase until you see a picture of Elon</li>
                <li>
                    4. If you have errors purchasing see
                    <a
                        href="https://rair-technologies.gitbook.io/knowledge-base/evm-strategy"
                        target="_blank"
                        rel="noreferrer"
                    > RPC article </a>
                    for error issues. Bignumber, mispriced, Internal JSON-RPC, etc
                </li>
                <li>5. Make sure you are switched to the MATIC network and have at least 1.01 MATIC</li>
                <li>6. Still need help?
                    <a
                        href="#video"
                        target="_blank"
                        rel="noreferrer"
                    > Watch this troubleshooting video </a>
                </li>
            </ul>
        </div>
    )
}

export default PurchaseChecklist