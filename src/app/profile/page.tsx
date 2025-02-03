export default function ProfilePage() {
  const random = getRandomInt(2);
  if(random == 1){
    throw new Error('Error in ProfilePage');
  }
  return (
  
    <div>
      <h1>Profile</h1>
      <p>My name is John Doe. I'm a software engineer.</p>
    </div>
  );
}   

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
