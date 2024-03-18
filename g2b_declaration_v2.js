//애플릿 code 관련 파라미터 배열
var codebase = "http://221.165.79.173:1236/g2b_v2.jar";
console.log('hello word')
var codeArray = new Array();
codeArray['G2B'] = 'kr.go.g2b.applet.G2B';
codeArray['G2BApprove'] = 'kr.go.g2b.applet.G2BConnect';
codeArray['G2B_RELAY2'] = 'kr.go.g2b.applet.G2BMas';
codeArray['G2BSeal'] = 'kr.go.g2b.applet.G2BSeal';
codeArray['SG_OpenWeb'] = 'com.sg.openews.client.jodal.launcher.JodalLauncherApplet';
codeArray['DialogHandler'] = 'kr.go.g2b.applet.DialogHandlerApplet';

//애플릿 크기 배열
var sizeArray = new Array();
sizeArray['G2B'] = '100';
sizeArray['G2BApprove'] = '0';
sizeArray['SG_OpenWeb'] = '0';
sizeArray['DialogHandler'] = '0';

var jars = new Array();
var vers = new Array();
//나라장터 애플릿 jars
jars[0] = "g2b_v2.jar";
vers[0] = "3.0.0.38";

jars[1] = "commons_v2.jar";
vers[1] = "3.0.0.38";

//jars[2] = "db_v2.jar";
//vers[2] = "2.0.0.38";

//한국정보인증 jars
jars[2] = "ewscommon.jar";
vers[2] = "3.0.0.37";

jars[3] = "images.jar";
vers[3] = "3.0.0.26";

jars[4] = "jodalApi.jar";
vers[4] = "3.0.0.37";

jars[5] = "jodalLauncher.jar";
vers[5] = "3.0.0.37";

jars[6] = "launcher.jar";
vers[6] = "3.0.0.37";

jars[7] = "libgpkiapi_jni.jar";
vers[7] = "3.0.0.19";

jars[8] = "sgapplet.jar"; 
vers[8] = "3.0.0.37";

jars[9] = "sg-xml-security-1.1.1.jar";
vers[9] = "3.0.0.37";
 
jars[10] = "signgateCrypto.jar";
vers[10] = "3.0.0.19";

jars[11] = "kica_provider-1.0.jar";
vers[11] = "3.0.0.37";

//native 라이브러리 관련 배열
var dllName = new Array();
var dllVersion = new Array();

dllName[0] =  "BHSM_JNI2.dll";
dllVersion[0] = "2.0.0.1";

dllName[1] =  "KICAUAC.dll";
dllVersion[1] = "1.0.0.2";

dllName[2] =  "KicaUACJni.dll";
dllVersion[2] = "1.0.0.2";

dllName[3] =  "gpkiapi2.dll";
dllVersion[3] = "1.5.1.0";

dllName[4] =  "gpkiapi.dll";
dllVersion[4] = "1.2.0.0";

dllName[5] =  "gpkiapi_jni.dll";
dllVersion[5] = "1.1.2.0";

dllName[6] =  "nsldap32v11.dll";
dllVersion[6] = "4224.0.0.8803";


var imgUrl = "https://www.g2b.go.kr:8070/gov/koneps/um/image/login/logo_n.jpg";
//유니온 1.0.2.1 업데이트, 슈프리마 업데이트 2010.07.27
var tokenList = "-----BEGIN PKCS7-----\r\n" + 
			"MIIIEgYJKoZIhvcNAQcCoIIIAzCCB/8CAQExCTAHBgUrDgMCGjCCAXIGCSqGSIb3\r\n" + 
			"DQEHAaCCAWMEggFfMXwowdYpvr7Fpb7uv6HAzMa8IEVMRkktNzJNfDEuMS4wLjN8\r\n" + 
			"QkhTTWFwaS5kbGx8NGQ5MGUzNDJmMmZmM2YzMzgxMzIyMmNhZDllNzRmNTY5YzE3\r\n" + 
			"ZTZmY3wyfCjB1inAr7TPv8LEv7nCtM/GvCBCSU8tU0VBTHwxLjAuMi4xfEZQX0hT\r\n" + 
			"TS5kbGx8MzQ4OWM5MjZhMjFhZjZhYWZjMTM5ZDc5NDNhODE2MzY3YTFlMTE1Nnwz\r\n" + 
			"fCjB1im9tMfBuK64tiBBU0FNMjA3MkZQfDEuMC4wLjEwfEJpb1NpZ24uZGxsfDMy\r\n" + 
			"MmE1MDgyODkxYmMwNmM4MmZiMWQxOGMwNDE5NWQ4YzA0YTMxNDd8NHwowdYpuPC6\r\n" + 
			"uyBNS1QtMTAwMEZ8MS4wLjAuNSB8U0FUQlRfYXBpLmRsbHw0OTY5YWJhYTE4NThm\r\n" + 
			"MjZkNDM0N2FjY2EzN2NhOTI3NDdhZDgzMjBmoIIFIDCCBRwwggQEoAMCAQICBAGs\r\n" + 
			"D/MwDQYJKoZIhvcNAQEFBQAwSjELMAkGA1UEBhMCS1IxDTALBgNVBAoMBEtJQ0Ex\r\n" + 
			"FTATBgNVBAsMDEFjY3JlZGl0ZWRDQTEVMBMGA1UEAwwMc2lnbkdBVEUgQ0EyMB4X\r\n" + 
			"DTExMDkxOTA2MDMyOVoXDTEyMTAxNTEzMDk1OVowgYcxCzAJBgNVBAYTAktSMQ0w\r\n" + 
			"CwYDVQQKDARLSUNBMRMwEQYDVQQLDApsaWNlbnNlZENBMRUwEwYDVQQLDAzqs7Xq\r\n" + 
			"s7XquLDqtIAxEjAQBgNVBAsMCeyhsOuLrOyyrTESMBAGA1UECwwJRzJC7Jq07JiB\r\n" + 
			"MRUwEwYDVQQDDAxHMkLsl4XssrQxODEwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJ\r\n" + 
			"AoGBAMb668r/7jvMyEdF8UcB6iN2w39AiKIgQ7oRuFQRPAKjg7VqOrfMHFODzHmM\r\n" + 
			"OGenrWJftTFJhmd7thlHWlEWkDoqcCPcjniWhgnKOVeE4oem/EpZJPl0eILw0PGd\r\n" + 
			"Obg3AcbXtKcQ+A1EUvRfG1Quie4d5nxdfS8REZUFeOoDvpwDAgMBAAGjggJOMIIC\r\n" + 
			"SjCBjwYDVR0jBIGHMIGEgBS5CfK2IUiaKroCWYCGJ5MWanf1WaFopGYwZDELMAkG\r\n" + 
			"A1UEBhMCS1IxDTALBgNVBAoMBEtJU0ExLjAsBgNVBAsMJUtvcmVhIENlcnRpZmlj\r\n" + 
			"YXRpb24gQXV0aG9yaXR5IENlbnRyYWwxFjAUBgNVBAMMDUtJU0EgUm9vdENBIDGC\r\n" + 
			"AidhMB0GA1UdDgQWBBTs6PH07uTEWLWj72Lbcg3rq5AyrjAOBgNVHQ8BAf8EBAMC\r\n" + 
			"BsAwdQYDVR0gBG4wbDBqBgoqgxqMmkQFAgEDMFwwLAYIKwYBBQUHAgEWIGh0dHA6\r\n" + 
			"Ly93d3cuc2lnbmdhdGUuY29tL2Nwcy5odG1sMCwGCCsGAQUFBwICMCAeHsd0ACDH\r\n" + 
			"eMmdwRyylAAgrPXHeMd4yZ3BHMeFssiy5DBpBgNVHREEYjBggQ9zdGtpbUBwcHMu\r\n" + 
			"Z28ua3KgTQYJKoMajJpECgEBoEAwPgwJRzJC7JeF7LK0MDEwLwYKKoMajJpECgEB\r\n" + 
			"ATAhMAcGBSsOAwIaoBYEFF4XqfGwhvmSoboEtbmFmpIEVY44MF8GA1UdHwRYMFYw\r\n" + 
			"VKBSoFCGTmxkYXA6Ly9sZGFwLnNpZ25nYXRlLmNvbTozODkvb3U9ZHA1cDIxNDU4\r\n" + 
			"LG91PWNybGRwLG91PUFjY3JlZGl0ZWRDQSxvPUtJQ0EsYz1LUjBEBggrBgEFBQcB\r\n" + 
			"AQQ4MDYwNAYIKwYBBQUHMAGGKGh0dHA6Ly9vY3NwLnNpZ25nYXRlLmNvbTo5MDIw\r\n" + 
			"L09DU1BTZXJ2ZXIwDQYJKoZIhvcNAQEFBQADggEBAKI9YHRZtjXTHAAohZVkJpxT\r\n" + 
			"W4glvYPgiqtDRXIPgTeYUr/nN06c8mYrCe4pxMAFWKbXeEDKaPEkHV6k4NaIPS0I\r\n" + 
			"lPua9htxdCJQarl0wf1EhzAj42ugj8dFlEi1JepaRGAcZ0BPmgmzOqF0cM1SwsnC\r\n" + 
			"H/3jClJaV10MPfgyA6OuRtGuClH3l4tYAS492EqPo2OpiWV+Y4BTPF6IeBvex/jn\r\n" + 
			"c8zBfK28xshr8YHGWL8nH5JR+eOm/UuV0ToATvXKJ7OUkNOsENObfRGHLge2TgZV\r\n" + 
			"RZOYYthw/Sm2pkJ4D/Lng+nSPttd3wo6NEziF/LOZVZx+PwmXy9cCpeeNabWTogx\r\n" + 
			"ggFTMIIBTwIBATBSMEoxCzAJBgNVBAYTAktSMQ0wCwYDVQQKDARLSUNBMRUwEwYD\r\n" + 
			"VQQLDAxBY2NyZWRpdGVkQ0ExFTATBgNVBAMMDHNpZ25HQVRFIENBMgIEAawP8zAH\r\n" + 
			"BgUrDgMCGqBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwIwYJKoZIhvcNAQkE\r\n" + 
			"MRYEFCkp+B5qJ1nIXVVPNv/x2kq+mNHXMBwGCSqGSIb3DQEJBTEPFw0xMTEyMTUw\r\n" + 
			"NDQ3NDVaMAsGCSqGSIb3DQEBAQSBgHY41O5YvQciadCYJbg9yUArclqgAVhYkpfh\r\n" + 
			"jwBc9HFmEvqjrHiSo3QXOXQjGCEK8soY1h7Y7XNmmsmmeyrqMS+kWccdH6xHHWMH\r\n" + 
			"9zt9uBYHJ1TJQFQsXyBkxuSS1TpfblkMR+YnW1nu6gHTppxP4dCdGbA7gwN6YfhS\r\n" + 
			"lso5yUyg\r\n" + 
			"-----END PKCS7-----";

//JRE alert(애플릿)
function jreNotInstalled()
{
	alert(
		"JRE(Java(TM) Runtime Environment) 프로그램이 설치되어 있지 않아\n" +
		"보안모듈을 구동 하실 수 없습니다.\n" + 
		"JRE 프로그램을 반드시 설치하시기 바랍니다.");
}

//jarlist 출력
function printJars(isG2BSeal) {
	var jarList = "";
	//var cnt = 0;
	//for(indx in jars) {		
	for(var indx=0;indx<jars.length;indx++) {		
		jarList = jarList + jars[indx];
		if(isG2BSeal == true && cnt >= 1) break;
		if(indx!= jars.length - 1) {
			jarList = jarList + ","; 
		}
		//cnt++;
	} 
	return jarList;
}
//jarversion 출력
function printVers(isG2BSeal) {
	var verList = "";
	//var cnt = 0;
	//for(indx in vers) {		
	for(var indx=0;indx<vers.length;indx++) {		
		verList = verList + vers[indx];
		if(isG2BSeal == true && cnt >= 1) break;
		if(indx!= vers.length - 1) {
			verList = verList + ","; 
		}		
		//cnt++;
	} 

	return verList;
}


/*
function print(array) 
{
	var list = "";
	var cnt = 1;
	for(indx in array) {
		list = list + array[indx];
		if(cnt!= array.length) {
			list = list + ","; 
		}
		cnt++;
	} 
	return list;
}
*/

function printNativeLib() 
{
	var len = dllName.length;
	var list = "";
	var i;

	for(i=0;i<len;i++)
	{
		if(i == len - 1)
			list = list + dllName[i] + '-' + dllVersion[i];
		else
			list = list + dllName[i] + '-' + dllVersion[i] + ',';
	}
	return list;
}

function printOnError(mName)
{
	if(mName == 'SG_OpenWeb')
		return ' onError="javascript:jreNotInstalled();"'; 
	else
		return ''; 
}

function printSize(mName)
{
	if(mName == 'G2BSeal')
		return ' width="100" height ="80"';
	else
		return ' width="' + sizeArray[mName] + '" height="' +  sizeArray[mName] + '"';
}


function getAppletTagEn(mName) {
	return getAppletTag(mName, "EN_US");
}

function getAppletTag(mName, locale)
{
		var _app = navigator.appName;
		var _uAgent = navigator.userAgent;
		var appetTag;
		
		if(_uAgent.indexOf("Trident") > 0) {
			_app= 'Microsoft Internet Explorer';
		}
		

		if (_app == 'Mozilla' || _app == 'Netscape') {
	  appletTag = '<embed'+
				' name="' + mName + '"' +
				' id="' + mName + '"' +
				' CODE="' + codeArray[mName] + '"' +
				' java_codebase="' + codebase + '"' +
				printSize(mName) + 
				//' width="' + sizeArray[mName] +'"' +
				//' height="' + sizeArray[mName] +'"' +
				' type="application/x-java-applet;version=1.6"' +
				' java_arguments=" -Xmx512M -Djnlp.packEnabled=true "' +
				' java_version="1.6.0_24+"' +
				' codebase_lookup="false"' +
				' cache_archive="' + printJars(false) + '"' +
				' cache_version="' + printVers(false) + '"' +
				' MAYSCRIPT="true"' +
				' ProductHome="/gov/koneps/pt/install/gtobapplet/jar/"' +
				' nativeLib="' + printNativeLib() + '"' +
				((locale != undefined) ? ' locale="' + locale + '"' : "") +
				' scriptable="true">' +
				' </embed>';
	  }
	else if (_app == 'Microsoft Internet Explorer') {
		
	 appletTag = '<object' +
		   	    ' name="' + mName + '"' +
				' id="' + mName + '"' +
				' classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93"' +
				' codebase="http://java.sun.com/update/1.6.0/jinstall-6u24-windows-i586.cab"' +
				printOnError(mName) + 
				//' onError="javascript:jreNotInstalled();"' +
				printSize(mName) + 
				//' width="' + sizeArray[mName] +'"' +
				//' height="' + sizeArray[mName] +'"' +
				' tabindex="-1">' +
				' <param name="code" value="'+ codeArray[mName] +'"/>' +
				' <param name="codebase" value="' + codebase + '"/>' +
				' <param name="java_arguments" value=" -Xmx512M -Djnlp.packEnabled=true "/>' +
				' <param name="java_version" value="1.6.0_24+"/>' +
				' <param name="codebase_lookup" value="false"/>' +
				' <param name="cache_archive" value="' + printJars(false) + '"/>' +
				' <param name="cache_version" value="' + printVers(false) + '"/>' +
				' <param name="MAYSCRIPT" value="true"/>' +    			
				' <param name="ProductHome" value="/gov/koneps/pt/install/gtobapplet/jar/"/>' +    			
 				' <param name="nativeLib" value="' + printNativeLib() + '"/>' +
				' <param name="scriptable" value="true"/>' +
				((locale != undefined) ? ' <param name="locale" value="' + locale + '"/>' : "") +
				' </object>';

			}
	else {
	  appetTag = '<p>Sorry, unsupported browser.</p>';
	}
	// TODO 애플릿 로딩 차단
	//return appletTag;
	return "";
}
