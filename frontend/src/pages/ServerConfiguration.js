import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <StyledPaper>

<HeaderBox>
      <StyledBox>
        <Typography>{t('Parameter Description')}</Typography>
        <Typography>{t('Parameter Value')}</Typography>
        <Typography>{t('Parameter Description')}</Typography>
      </StyledBox>
      </HeaderBox>
      <StyledDivider />

      <StyledSubtitle variant="subtitle1" gutterBottom>
        {t('Server Operation Parameters:')}
      </StyledSubtitle>

      <StyledDivider />


      

      <StyledBox>
        <Typography>{t('Register a user account that becomes a friend by default')}</Typography>
        <TextField fullWidth />
        <Typography>
          {t('All newly registered users will be automatically added as friends, such as APP owners/administrators/customer service, etc. You can fill in multiple numbers, separated by commas. Note: Corresponding to the account in the third column of User Management')}
        </Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Register the default group')}</Typography>
        <TextField fullWidth />
        <Typography>
          {t('All newly registered users will automatically join the group ID. You can enter multiple values, separated by commas. Group Management - View Group ID in Modify Configuration')}
        </Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Registration welcome message content')}</Typography>
        <TextField fullWidth defaultValue="Hi" multiline rows={2} />
        <Typography>{t('After registration, I received a message from the system customer service.')}</Typography>
      </StyledBox>

      <StyledDivider />


      
      <StyledSubtitle variant="subtitle2" gutterBottom>
      {t('User Default Privacy Settings: (unified default settings for newly registered users, users can set them individually in the client)')}
      </StyledSubtitle>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Default Roaming Duration')}</Typography>
        <StyledFormControl>
          <Select defaultValue="Permanent">
            <MenuItem value="No Roaming">{t('No Roaming')}</MenuItem>
          <MenuItem value="Permanent">{t('Permanent')}</MenuItem>
            <MenuItem value="One Day">{t('One Day')}</MenuItem>
            <MenuItem value="One Week">{t('One Week')}</MenuItem>
            <MenuItem value="One Month">{t('One Month')}</MenuItem>
            <MenuItem value="One Year">{t('One Year')}</MenuItem>
            <MenuItem value="One Day">{t('One Day')}</MenuItem>
            <MenuItem value="January">{t('January')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Similar to QQ message roaming')}</Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Default Expiration Destruction Time')}</Typography>
        <StyledFormControl>
          <Select defaultValue="Permanent">
            <MenuItem value="Permanent">{t('Permanent')}</MenuItem>
            <MenuItem value="One Day">{t('One Day')}</MenuItem>
            <MenuItem value="One Week">{t('One Week')}</MenuItem>
            <MenuItem value="One Month">{t('One Month')}</MenuItem>
            <MenuItem value="One Year">{t('One Year')}</MenuItem>
            <MenuItem value="Season">{t('Season')}</MenuItem>
            <MenuItem value="January">{t('January')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Is Friend Verification Required?')}</Typography>
        <StyledFormControl>
          <Select defaultValue="Yes">
            <MenuItem value="Yes">{t('Yes')}</MenuItem>
            <MenuItem value="No">{t('No')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Is XMPP Encrypted?')}</Typography>
        <StyledFormControl>
          <Select defaultValue="Yes">
            <MenuItem value="Yes">{t('Yes')}</MenuItem>
            <MenuItem value="No">{t('No')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('Whether the message is encrypted for transmission')}</Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Whether to Support Multiple Logins')}</Typography>
        <StyledFormControl>
          <Select defaultValue="No">
            <MenuItem value="Yes">{t('Yes')}</MenuItem>
            <MenuItem value="No">{t('No')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography>{t('By default, the same account is restricted to single sign-on')}</Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Whether to Vibrate When a Message Comes In')}</Typography>
        <StyledFormControl>
          <Select defaultValue="Yes">
            <MenuItem value="Yes">{t('Yes')}</MenuItem>
            <MenuItem value="No">{t('No')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Let the Other Party Know That I Am Typing')}</Typography>
        <StyledFormControl>
          <Select defaultValue="Open">
            <MenuItem value="Open">{t('Open')}</MenuItem>
            <MenuItem value="Close">{t('Close')}</MenuItem>
          </Select>
        </StyledFormControl>
        <Typography></Typography>
      </StyledBox>

      <StyledDivider />


      <StyledBox>
        <Typography>{t('Use Map Location')}</Typography>
        <StyledFormControl>
        <Select defaultValue="Close">
          <MenuItem value="Open">{t('Open')}</MenuItem>
          <MenuItem value="Close">{t('Close')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography>{t('Location services require application of Baidu/Google Maps application certificates and are disabled by default')}</Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Allow Me to Be Searched by Account')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Open">
          <MenuItem value="Open">{t('Open')}</MenuItem>
          <MenuItem value="Close">{t('Close')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Allow Searching Me by Nickname')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Open">
          <MenuItem value="Open">{t('Open')}</MenuItem>
          <MenuItem value="Close">{t('Close')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Allow Android APP Process to Keep Alive')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Open">
          <MenuItem value="Open">{t('Open')}</MenuItem>
          <MenuItem value="Closure">{t('Closure')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Allow Others to See When I Was Last Online')}</Typography>
      <StyledFormControl>
        <Select value="All friends Show">
          <MenuItem value="All friends Show">{t('All friends Show')}</MenuItem>
          <MenuItem value="Now one is shown">{t('Now one is shown')}</MenuItem>
          <MenuItem value="Mobile Phone contacts display">{t('Mobile Phone contacts display')}</MenuItem>
          <MenuItem value="Show to Everyone">{t('Show to Everyone')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Allow Others to See My Account')}</Typography>
      <StyledFormControl>
        <Select value="All friends Show">
          <MenuItem value="All friends Show">{t('All friends Show')}</MenuItem>
          <MenuItem value="Now one is shown">{t('Now one is shown')}</MenuItem>
          <MenuItem value="Mobile Phone contacts display">{t('Mobile Phone contacts display')}</MenuItem>
          <MenuItem value="Show to Everyone">{t('Show to Everyone')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledSubtitle variant="subtitle2" gutterBottom>
      {t('Create Group Default Parameter Settings: (unified default settings for newly created group chats, group owners can modify them in the client)')}
    </StyledSubtitle>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Maximum Number of People in a Group')}</Typography>
      <TextField fullWidth defaultValue="1000" />
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Is this a private group?')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Yes">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Whether to Display the Number of Readers')}</Typography>
      <StyledFormControl>
        <Select defaultValue="No">
          <MenuItem value="Clouser">{t('Clouser')}</MenuItem>
          <MenuItem value="Cpen">{t('Cpen')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Whether to Enable Group Invitation Confirmation')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Close">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Send Notification when Group Members are Reduced')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Open">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Is it allowed to display group members?')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Yes">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Whether to Allow Ordinary Members to Chat Privately')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Yes">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Whether to Allow Ordinary Members to Invite Friends')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Yes">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Whether to Allow Ordinary Members to Upload Group Shared Files')}</Typography>
      <StyledFormControl>
        <Select defaultValue="No">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Whether to Allow Ordinary Members to Leave the Group')}</Typography>
      <StyledFormControl>
        <Select defaultValue="Yes">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>

    <StyledDivider />


    <StyledBox>
      <Typography>{t('Whether to Allow Ordinary Members to Initiate Lectures')}</Typography>
      <StyledFormControl>
      <Select defaultValue="No">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>
    <StyledBox>
      <Typography>{t('Whether to Allow Ordinary Members to Initiate Lectures')}</Typography>
      <StyledFormControl>
        <Select defaultValue="No">
          <MenuItem value="Yes">{t('Yes')}</MenuItem>
          <MenuItem value="No">{t('No')}</MenuItem>
        </Select>
      </StyledFormControl>
      <Typography></Typography>
    </StyledBox>
  </StyledPaper>
);

}

export default ServerConfigForm;