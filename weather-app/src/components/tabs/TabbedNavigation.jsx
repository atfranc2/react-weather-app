import { TabsContainer, StyledTabs, StyledTab, } from "./tabs.styles";
import { useState } from "react";


const TabbedNavigation = ({ tabNames, tabContent }) => {
    const [activeTab, setActiveTab] = useState(tabNames[0]);
    return (
        <>
            <TabsContainer>
                <StyledTabs>
                    {
                        tabNames.map((name, index) => {
                            const isActive = activeTab === name;
                            return <StyledTab active={isActive} onClick={() => setActiveTab(name)}>{name}</StyledTab>

                        })
                    }
                </StyledTabs>
            </TabsContainer>
            <div>
                {
                    tabNames.map((name, index) => {
                        const isActive = activeTab === name;
                        return <>{isActive ? tabContent[index] : null}</>

                    })
                }
            </div>
        </>
    )
}

export default TabbedNavigation; 