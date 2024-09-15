import React from 'react';
import {
  Paper,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  // padding: theme.spacing(1),
  marginBottom: theme.spacing(3),
  minWidth: '650px',
  margin: '10px 50px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: theme.spacing(3),
  padding: theme.spacing(2),  
  alignItems: 'center',
  '& > *': {
    textAlign: 'left',
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
  width: '100%',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  // margin: theme.spacing(1, 0),
  width: '100%',
}));


const StyledSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  // padding: theme.spacing(1),
}));


const ServerConfigForm = () => {
  return (
    <StyledPaper>

<HeaderBox>
      <StyledBox>
        <Typography>Parameter Description</Typography>
        <Typography>Parameter Value</Typography>
        <Typography>Parameter Description</Typography>
      </StyledBox>
      </HeaderBox>
      <StyledDivider />

      <StyledSubtitle variant="subtitle1" gutterBottom>
        Server operation parameters:
      </StyledSubtitle>

      <StyledDivider />


      

      <StyledBox>
        <Typography>Register a user account that becomes a friend by default</Typography>
        <TextField fullWidth />
        <Typography>
          All newly registered users will be automatically added as friends, such as APP owners/administrators/customer service, etc. You can fill in multiple numbers, separated by commas. Note: Corresponding to the account in the third column of User Management
        </Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Register the default group</Typography>
        <TextField fullWidth />
        <Typography>
          All newly registered users will automatically join the group ID. You can enter multiple values, separated by commas. Group Management - View Group ID in Modify Configuration
        </Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Registration welcome message content</Typography>
        <TextField fullWidth defaultValue="Hi" multiline rows={2} />
        <Typography>After registration, I received a message from the system customer service.</Typography>
      </StyledBox>

      <StyledDivider />


      
      <StyledSubtitle variant="subtitle2" gutterBottom>
      User default privacy settings: (unified default settings for newly registered users, users can set them individually in the client)
      </StyledSubtitle>

      <StyledDivider />


      <StyledBox>
        <Typography>Default roaming duration</Typography>
        <StyledFormControl>
          <Select defaultValue="永久">
            <MenuItem value="永久">永久</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>Similar to QQ message roaming</Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Default expiration destruction time</Typography>
        <StyledFormControl>
          <Select defaultValue="永久">
            <MenuItem value="永久">永久</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Is friend verification required?</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Is XMPP encrypted?</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>Whether the message is encrypted for transmission</Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to support multiple logins</Typography>
        <StyledFormControl>
          <Select defaultValue="否">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>By default, the same account is restricted to single sign-on</Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to vibrate when a message comes in</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Let the other party know that I am typing</Typography>
        <StyledFormControl>
          <Select defaultValue="开启">
            <MenuItem value="开启">开启</MenuItem>
            <MenuItem value="关闭">关闭</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Use Map Location</Typography>
        <StyledFormControl>
          <Select defaultValue="关闭">
            <MenuItem value="开启">开启</MenuItem>
            <MenuItem value="关闭">关闭</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>Location services require application of Baidu/Google Maps application certificates and are disabled by default</Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Allow me to be searched by account</Typography>
        <StyledFormControl>
          <Select defaultValue="开启">
            <MenuItem value="开启">开启</MenuItem>
            <MenuItem value="关闭">关闭</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Allow searching me by nickname</Typography>
        <StyledFormControl>
          <Select defaultValue="开启">
            <MenuItem value="开启">开启</MenuItem>
            <MenuItem value="关闭">关闭</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Allow Android APP process to keep alive</Typography>
        <StyledFormControl>
          <Select defaultValue="开启">
            <MenuItem value="开启">开启</MenuItem>
            <MenuItem value="关闭">关闭</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Allow others to see when I was last online</Typography>
        <StyledFormControl>
          <Select defaultValue="所有好友显示">
            <MenuItem value="所有好友显示">所有好友显示</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Allow others to see my account</Typography>
        <StyledFormControl>
          <Select defaultValue="所有好友显示">
            <MenuItem value="所有好友显示">所有好友显示</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


  
      <StyledSubtitle variant="subtitle2" gutterBottom>
      Create group default parameter settings: (unified default settings for newly created group chats, group owners can modify them in the client)
      </StyledSubtitle>

      <StyledDivider />


      <StyledBox>
        <Typography>Maximum number of people in a group</Typography>
        <TextField fullWidth defaultValue="1000" />
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Is this a private group?</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to display the number of readers</Typography>
        <StyledFormControl>
          <Select defaultValue="否">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to enable group invitation confirmation</Typography>
        <StyledFormControl>
          <Select defaultValue="关闭">
            <MenuItem value="开启">开启</MenuItem>
            <MenuItem value="关闭">关闭</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Send notification when group members are reduced</Typography>
        <StyledFormControl>
          <Select defaultValue="开启">
            <MenuItem value="开启">开启</MenuItem>
            <MenuItem value="关闭">关闭</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Is it allowed to display group members?</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to allow ordinary members to chat privately</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to allow ordinary members to invite friends</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to allow ordinary members to upload group shared files</Typography>
        <StyledFormControl>
          <Select defaultValue="否">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>


      <StyledDivider />


      <StyledBox>
        <Typography>Whether to allow ordinary members to leave the group</Typography>
        <StyledFormControl>
          <Select defaultValue="是">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>Whether to allow ordinary members to initiate lectures</Typography>
        <StyledFormControl>
          <Select defaultValue="否">
            <MenuItem value="是">是</MenuItem>
            <MenuItem value="否">否</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>
    </StyledPaper>
  );
};

export default ServerConfigForm;