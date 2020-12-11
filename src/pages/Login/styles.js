import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Corpo = styled.View`
  margin-top: 50px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-weight: 600;
  text-align: center;
  padding-top: 20px;
  
`;

export const NameHeader = styled.Text`
  font-weight: 600;
  text-align: center;
  padding-top: 20px;
  font-size: 60px;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;

export const CaixaTexto = styled.TextInput`
  borderWidth: 1px;
  margin-bottom: 10px;
  margin-left: 8px;
  margin-right: 8px;
  text-align: center;
`;

export const Logo = styled.Image`
  margin: 0 auto;

`;