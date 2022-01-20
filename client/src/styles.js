import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:'50px'
  },
  heading: {
    color: 'rgba(228, 149, 76, 0.8)',
  },
  image: {
    marginLeft: '10px',
  },
}));
