const AddFriendButton = styled(RoundedButton)`
  width: 130px;
  height: 55px;
`;

const renderUsers = ({ item }) => {
  const { friends, setFriends } = useContext(UserContext);
  const onRemove = () => {
    const newFriends = [...friends, item];
    setFriends(newFriends);
  };
  return (
    <UserView>
      <UserText>{item.username}</UserText>
      <AddFriendButton colour="green" text="send request" fontSize={27} />
    </UserView>
  );
};
