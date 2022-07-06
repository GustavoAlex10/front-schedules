import React from "react";
import styled from "styled-components";

const CardPlanner = styled.div`
    width: 370px;
    height: 500px;
    margin: 10px;
    background-color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 10px;
`;

const Day = styled.button`
    width: 50px;
    height: 40px;
    margin: 10px;
    background-color: white;    
    border-radius: 10px;
`;

const Text = styled.h1`
    font-size: 20px;
    color: gray;
`;

const Notifications = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Subscription = styled.div`
    width: 370px;
    height: 150px;
    background-color: green;
    border-radius: 10px;
    margin: 2px 10px;  
`;

const TextSubscription = styled.h1`
    padding: 5px;  
    font-size: 20px;
`;

const TextHolderSubs = styled.h1`
    padding: 10px;  
    font-size: 20px;
    color: gray;
`;

const SubStatus = styled.img`
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 10px;    
    margin-left: 250px;
    margin-top: -100px;
`;

const Planner = () => {


    return (
        <>
            <CardPlanner>
                <Day>
                    <Text>1</Text>
                </Day>
                <Day>
                    <Text>2</Text>
                </Day>
                <Day>
                    <Text>3</Text>
                </Day>
                <Day>
                    <Text>4</Text>
                </Day>
                <Day>
                    <Text>5</Text>
                </Day>
                <Day>
                    <Text>6</Text>
                </Day>
                <Day>
                    <Text>7</Text>
                </Day>
                <Day>
                    <Text>8</Text>
                </Day>
                <Day>
                    <Text>9</Text>
                </Day>
                <Day>
                    <Text>10</Text>
                </Day>
                <Day>
                    <Text>11</Text>
                </Day>
                <Day>
                    <Text>12</Text>
                </Day>
                <Day>
                    <Text>13</Text>
                </Day>
                <Day>
                    <Text>14</Text>
                </Day>
                <Day>
                    <Text>15</Text>
                </Day>
                <Day>
                    <Text>16</Text>
                </Day>
                <Day>
                    <Text>17</Text>
                </Day>
                <Day>
                    <Text>18</Text>
                </Day>
                <Day>
                    <Text>19</Text>
                </Day>
                <Day>
                    <Text>20</Text>
                </Day>
                <Day>
                    <Text>21</Text>
                </Day>
                <Day>
                    <Text>22</Text>
                </Day>
                <Day>
                    <Text>23</Text>
                </Day>
                <Day>
                    <Text>24</Text>
                </Day>
                <Day>
                    <Text>25</Text>
                </Day>
                <Day>
                    <Text>26</Text>
                </Day>
                <Day>
                    <Text>27</Text>
                </Day>
                <Day>
                    <Text>28</Text>
                </Day>
                <Day>
                    <Text>29</Text>
                </Day>
                <Day>
                    <Text>30</Text>
                </Day>
            </CardPlanner >
            <Notifications>
                <Subscription>
                    <TextSubscription>
                        Mark Hunter
                    </TextSubscription>
                    <TextHolderSubs>
                        Mark Hunter
                    </TextHolderSubs>
                    <SubStatus />
                    
                </Subscription>
                <Subscription>
                    <TextSubscription>
                        Mark Hunter
                    </TextSubscription>
                    <TextHolderSubs>
                        Mark Hunter
                    </TextHolderSubs>
                    <SubStatus />                    
                </Subscription>
                <Subscription>
                    <TextSubscription>
                        Mark Hunter
                    </TextSubscription>
                    <TextHolderSubs>
                        Mark Hunter
                    </TextHolderSubs>
                    <SubStatus />                    
                </Subscription>
                <Subscription>
                    <TextSubscription>
                        Mark Hunter
                    </TextSubscription>
                    <TextHolderSubs>
                        Mark Hunter
                    </TextHolderSubs>
                    <SubStatus />                    
                </Subscription>
                <Subscription>
                    <TextSubscription>
                        Mark Hunter
                    </TextSubscription>
                    <TextHolderSubs>
                        Mark Hunter
                    </TextHolderSubs>
                    <SubStatus />                    
                </Subscription>
            </Notifications>
        </>
    )
}

export default Planner;