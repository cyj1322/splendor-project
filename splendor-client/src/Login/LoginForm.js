import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, Typography, FormControlLabel, Checkbox, Card } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    },
    root: {
        background: "#F4BF36"
      },
      input: {
        color: "white"
      },
      notchedOutline: {
        borderWidth: "2px",
        borderColor: "#F4BF36 !important"
      },
      buttonOutline: {
        borderColor: "#F4BF36"
      },
      fullHeightButton: {
        height: "10%"
      }
});

class LoginTab extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Typography align="center" component="h1" variant="h3" style={{ "min-height": "60px", width: "100%", color: "#44546A" }}>
                    Splendor Login
                    </Typography>
                    <Grid container spacing={8} align="center" alignItems="flex-end">
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="아이디" type="email" margin="normal" variant="outlined" autoFocus required  
                            InputProps={{
                                classes: {notchedOutline: classes.notchedOutline}
                            }} style={{ "min-height": "60px", width: "80%", align: "center", fontFamily: '"Roboto"' }}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} align="center" alignItems="flex-end">
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="비밀번호" type="password" margin="normal" variant="outlined" required 
                            InputProps={{
                                classes: {notchedOutline: classes.notchedOutline}
                            }} style={{ "min-height": "60px", width: "80%", align: "center" }}/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '20px' }}>
                        <Button variant="filled" fullWidth style={{ textTransform: "none" }} className={classes.root}
                        InputProps={{
                            classes: {notchedOutline: classes.notchedOutline}
                        }} style={{ "min-height": "60px", width: "80%" }}>로그인</Button>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '20px' }}>
                        <Button variant="outlined" style={{ textTransform: "none", "min-height": "60px", width: "40%", borderColor: "#F4BF36", borderWidth: "2px" }}>아이디/비번 찾기</Button>
                        <Button variant="outlined" style={{ textTransform: "none", "min-height": "60px", width: "40%", borderColor: "#F4BF36", borderWidth: "2px" }}>회원가입</Button>
                    </Grid>                 
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);