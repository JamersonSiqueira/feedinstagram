import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const ContainerFlex = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;

export const ContainerDesc = styled.View`
  padding: 15px;
  flex-direction: row;
  margin: 10px;
  display: flex;
  padding: 10px;
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-weight: 600;
`;
export const NameAutor = styled.Text`
  font-weight: bold;
`;

export const NameLike = styled.Text`
  font-weight: 600;
  padding-left: 15px;
  margin: 10px auto;
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