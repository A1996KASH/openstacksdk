var OSWrap = require('openstack-wrapper');
var keystone = new OSWrap.Keystone('http://61.216.83.14:5000/v3/');

keystone.getToken('admin', 'password', function(error, token){
  if(error)
  {
    console.error('an error occured', error);
  }
  else
  {
    console.log('A general token object has been retrived', token);
    //the token value (token.token) is required for project listing & getting project specific tokens
  }
});

keystone.getProjectToken('gAAAAABhl8_cPqI4OiO3xm236BdYtibcYjAPoAeylS0gAQq7_GDtpRyD5yKVDOaCVxso6UXPf0hIEYgOYEbVRM8RTEygX-Me2cMg4-G0B-2baTEd_apbXmRYdVRFg5ClGuZXhlX10N2voKhUnfdXpTxUE2RtM7QFrg', 'ebd4c73092c04a12a50b1b6d695b429f', function(error, project_token){
    if(error)
    {
      console.error('an error occured', error);
    }
    else
    {
      console.log('A project specific token has been retrived', project_token);
      //the project token contains all kinds of project information
      //including endpoint urls for each of the various systems (Nova, Neutron, Glance)
      //and the token value (project_token.token) required for instantiating all non Keystone Objects
      //see the openstack docs for more specifics on the return format of this object (or print it out I suppose)
    }
  });

var nova = new OSWrap.Nova('http://61.216.83.14:8774/v2.1', 'gAAAAABhl9AVF2C27KCNXp1fNm75S7Jw--ixGTASO9OrlajLcd0xd6q96T1Fci9Bf3dpGSCPGuzNnc189AQv6rEFEg450fR0uo0WhuDVmlMRGR4TwzmxTdHak8U38CF14fJnx_XzXlGmhE18Unr2AT8cGMgRTbIDqpObSfSdTcp6Z6OYtXRi2yWLXHj9puCSCJufSXK2gnRd');

nova.getServerConsoleURL('novnc', 'e48e4bd9-d306-460b-bd06-c69dfa35cf56',function(error, res){
    if(error){
        console.log('error')
    } else{
        console.log(res)
    }
})
