import styled from 'styled-components';

export const Img = styled.img`  
  width:100%;
  border-top-left-radius: 1em ;
  border-top-right-radius: 1em ;
`;
export const Jogo = styled.div`
background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;	
@media screen and (max-width: 700px) {
	
		margin: 0;
		margin-top: 2rem;
		display: block; 
		width: 90%;
		margin:1.25rem;			
}
`;

export const CardJogo = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
} 
`;

export const Imglink = styled.div`
  background-color: #131316;
	color: #fff;
	padding: 30px;
	max-width: 250px;
  @media screen and (max-width: 700px) {		
		max-width: 700px;
    align-items: center;
			
}

`;

export const LinkTrailer = styled.a`
  color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
`;
export const InfoJogo = styled.div`
 
  color: black;
  position: relative;
  width: 100%;    
`;
export const CabecalhoInfoJogo = styled.div`
  padding: 10px;
  color: black;
  position: relative;
  width: 100%;
  @media screen and (max-width: 700px) {		
		width: 90%;
    align-items: center;
			
}
`;
export const TituloInfoJogo = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -2px;
`;
export const BtnDiv = styled.div`
  display: flex;
  width: 100%;
  float: right;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 700px) {		
		width: 100%;
    align-items: center;
    margin-bottom: 1rem;
			
}
`;
export const Btn = styled.button`
background-color: rgb(55, 109, 39);;
border: 0;
border-radius: 50px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
color: rgb(255, 255, 255);
font-size: 16px;
padding: 12px 25px;		
bottom: 30px;	
letter-spacing: 1px;
`;
