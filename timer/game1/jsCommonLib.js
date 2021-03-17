function bbsTrim(str)  // Remove Blank Function
{
	var index, len, bJudge

	while(true)
	{
		bJudge = true;
		index = str.indexOf(' ');
		if (index == -1) break;
		if (index == 0)
		{
			len = str.length;
			str = str.substring(0, index) + str.substring((index+1),len);
		}
		else
		{
			bJudge = false;
		}

		index = str.lastIndexOf(' ');
		if (index == -1) break;
		if (index == str.length - 1)
		{
			len = str.length;
			str = str.substring(0, index) + str.substring((index+1),len);
		}
		else
		{
			if(bJudge == false)
			{
				break;
			}
		}
	}
	return str;
}

function getBBSObject(objectId) { 
	// checkW3C DOM, then MSIE 4, then NN 4. 
	// 
	if(document.getElementById && document.getElementById(objectId)) { 
	return document.getElementById(objectId); 
	} 
	else if (document.all && document.all(objectId)) { 
	return document.all(objectId); 
	} 
	else if (document.layers && document.layers[objectId]) { 
	return document.layers[objectId]; 
	} else { 
	return false; 
	} 
} 

function getBBSObjectOpener(openers, objectId) { 
	// checkW3C DOM, then MSIE 4, then NN 4. 
	// 
	if(!openers)
	{
		return false
	}

	if(openers.document.getElementById && openers.document.getElementById(objectId)) { 
	return openers.document.getElementById(objectId); 
	} 
	else if (openers.document.all && openers.document.all(objectId)) { 
	return openers.document.all(objectId); 
	} 
	else if (openers.document.layers && openers.document.layers[objectId]) { 
	return openers.document.layers[objectId]; 
	} else { 
	return false; 
	} 
} 

function bbsStringValidate(strString)  //문자열을 검사하여 영문자와 숫자만 가능하도록 한다.(True False 반환)
{
	for(var i=0; i < strString.length; i++)
	{
		var strCode = strString.charCodeAt(i);

		if((strCode >= 97 && strCode <= 122) || (strCode >= 65 && strCode <= 90) || (strCode >= 48 && strCode <= 57))
		{
		}	
		else
		{
			return false;
		}
	}
	
	return true;
}

function setCookie( name, value, expiredays )
{
        var todayDate = new Date();
				todayDate.setHours(24,59,59);
        todayDate.setDate( todayDate.getDate() + (expiredays-1) );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookie( name )
{
        var nameOfCookie = name + "=";
        var x = 0;
        while ( x <= document.cookie.length )
        {
                var y = (x+nameOfCookie.length);
                if ( document.cookie.substring( x, y ) == nameOfCookie ) {
                        if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                                endOfCookie = document.cookie.length;
                        return unescape( document.cookie.substring( y, endOfCookie ) );
                }
                x = document.cookie.indexOf( " ", x ) + 1;
                if ( x == 0 )
                        break;
        }
        return "";
}
